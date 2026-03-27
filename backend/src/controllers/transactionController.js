import { extractReceiptData } from '../services/ocrService.js';
import { supabase } from '../config/supabaseClient.js';

export const analyzeReceipt = async (req, res) => {
    try {
        const { image_base64, expected_amount } = req.body;

        // 1. Run the OCR Service
        const ocr = await extractReceiptData(image_base64);

        if (!ocr.success) {
            console.error("OCR Service reported failure.");
            return res.status(500).json({ error: "OCR Failed to process image" });
        }

        const text = ocr.rawText;
        const sessionID = ocr.extractedData.refId;

        // 2. Dynamic Data Extraction (Handles different bank layouts)
        const senderMatch = text.match(/Sender:\s?([A-Z\s]+)/i);
        const senderName = senderMatch 
            ? senderMatch[1].trim() 
            : text.split('\n').find(line => line.length > 5 && !line.includes('N ') && !line.includes('202')) || "Unknown Sender";

        const banks = ["PalmPay", "OPay", "Kuda", "Zenith", "GTBank", "GTCO", "First Bank", "Access"];
        const detectedBank = banks.find(bank => text.toLowerCase().includes(bank.toLowerCase())) || "Other Bank";

        // 3. Date Parser Logic (Heuristic/Warning Only)
        
        
        const dateMatch = text.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{1,2},\s\d{4}/i);
        let isStale = false;
        if (dateMatch) {
            const receiptDate = new Date(dateMatch[0]);
            const today = new Date();
            const diffInDays = Math.floor((today - receiptDate) / (1000 * 60 * 60 * 24));
            if (diffInDays > 3) isStale = true; // 3-day grace period
        }

        // 4. Replay Attack Protection (Supabase Duplicate Check)
        const { data: existingTx } = await supabase
            .from('transactions') 
            .select('session_id')
            .eq('session_id', sessionID)
            .maybeSingle();

        const isDuplicate = !!existingTx;

        // 5. THE LOGIC ENGINE
        const extractedAmount = ocr.extractedData.amount;
        const isAmountMatch = Number(expected_amount) === Number(extractedAmount);

        // Status is FLAGGED only for Amount Mismatch or Duplicate ID
        const status = (isAmountMatch && !isDuplicate) ? "VERIFIED" : "FLAGGED";
        
        // Scoring Logic
        let riskScore = 10; 
        if (isStale) riskScore = 40;        // Warning
        if (!isAmountMatch) riskScore = 95; // High Risk
        if (isDuplicate) riskScore = 100;   // Critical Risk

        const finalFlags = [];
        if (!isAmountMatch) finalFlags.push("AMOUNT_MISMATCH");
        if (isDuplicate) finalFlags.push("REPLAY_ATTACK_DETECTED");
        if (isStale) finalFlags.push("STALE_RECEIPT_WARNING");

        console.log(`--- [VendorGuard AI] Verification: ${status} | Risk: ${riskScore}% ---`);

        // 6. SAVE TO DB (Only if it's a new, verified transaction)
        if (status === "VERIFIED" && !isDuplicate) {
            await supabase.from('transactions').insert([{
                session_id: sessionID,
                amount: extractedAmount,
                sender: senderName,
                bank: detectedBank,
                status: status
            }]);
        }

        // 7. Final Response to Frontend
        res.status(200).json({
            status,
            amount: extractedAmount,
            sender_name: senderName,
            bank: detectedBank,
            reference: sessionID,
            risk_score: riskScore,
            flags: finalFlags,
            raw_text: text
        });

    } catch (error) {
        console.error("Final Controller Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};