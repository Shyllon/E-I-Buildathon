import { createWorker } from 'tesseract.js';

export const extractReceiptData = async (base64Image) => {
  // 1. Create a worker (Better for memory management)
  const worker = await createWorker('eng');
  
  try {
    console.log("Starting OCR on Base64 Image...");
    
    // 2. Perform recognition directly on the Base64 string
    const { data: { text } } = await worker.recognize(base64Image);
    
    // 3. Clean up immediately to save memory
    await worker.terminate();

    console.log("--- RAW RECEIPT TEXT ---");
    console.log(text);

    if (!text || text.trim().length === 0) {
      return { success: false, rawText: "", extractedData: { refId: "NOT_FOUND", amount: 0 } };
    }

    // 4. Refined Regex for Amount (Naira)
    // Matches N, ₦, or NGN followed by digits with commas/decimals
    const amountRegex = /(?:N|₦|NGN|Amount|Total)\s?([\d,]+\.\d{2})/i;
    const amountMatch = text.match(amountRegex);

    // 5. NEW & IMPROVED: Universal Session/Ref ID Matcher
    // [1] Matches labeled IDs like "Session ID: 123..."
    // [2] Matches naked long strings of digits (20-40 chars) common in GTBank/Zenith
    const refRegex = /(?:Ref|No|ID|Session|Reference)\.?\s?:?\s?([A-Z0-9]{10,})|(\d{20,40})/i;
    const refMatch = text.match(refRegex);

    // Capture the labeled match OR the raw long number
    const finalRefId = refMatch ? (refMatch[1] || refMatch[2]) : "NOT_FOUND";

    return {
      success: true,
      rawText: text,
      extractedData: {
        refId: finalRefId.trim(),
        amount: amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : 0
      }
    };

  } catch (error) {
    console.error("OCR Service Error:", error);
    // Safety check: ensure worker is killed even if the logic crashes
    if (worker) await worker.terminate();
    return { success: false, error: error.message };
  }
};