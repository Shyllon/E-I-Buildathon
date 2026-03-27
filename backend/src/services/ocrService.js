import { createWorker } from 'tesseract.js';

export const extractReceiptData = async (imageUrl) => {
  // 1. Create a worker
  const worker = await createWorker('eng');
  
  try {
    console.log("Initializing OCR Worker for:", imageUrl);
    
    // 2. Perform recognition
    const { data: { text } } = await worker.recognize(imageUrl);
    
    // 3. Clean up worker immediately to save memory
    await worker.terminate();

    console.log("Raw OCR Text caught:", text);

    if (!text || text.trim().length === 0) {
      return { success: true, rawText: "", extractedData: { refId: null, amount: null } };
    }

    // 4. Enhanced Regex for Nigerian Receipts
    // Looks for amount after N, ₦, or NGN
    const amountRegex = /(?:N|₦|NGN|Amount)\s?([\d,]+\.\d{2})/i;
    const amountMatch = text.match(amountRegex);

    // Looks for Transaction Ref, No, or Session ID
    const refRegex = /(?:Ref|No|ID|Session)\.?\s?:?\s?([A-Z0-9]{10,})/i;
    const refMatch = text.match(refRegex);

    return {
      success: true,
      rawText: text,
      extractedData: {
        refId: refMatch ? refMatch[1] : null,
        amount: amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : null
      }
    };

  } catch (error) {
    console.error("OCR Error:", error);
    if (worker) await worker.terminate();
    return { success: false, rawText: "", extractedData: { refId: null, amount: null } };
  }
};