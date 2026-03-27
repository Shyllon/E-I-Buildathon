import { uploadReceiptImage } from '../services/storageService.js';
import { extractReceiptData } from '../services/ocrService.js';

export const testOCR = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    console.log("Starting Test Pipeline...");

    // 1. Upload to Supabase Storage
    const storageResult = await uploadReceiptImage(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype
    );

    if (!storageResult.success) {
      throw new Error("Storage Upload Failed: " + storageResult.error);
    }

    console.log("Image stored at:", storageResult.url);

    // 2. Run OCR on the stored image
    const ocrResult = await extractReceiptData(storageResult.url);

    // 3. Return everything to the user
    res.status(200).json({
      success: true,
      message: "OCR Scan Complete",
      imageUrl: storageResult.url,
      extracted: ocrResult.extractedData,
      // Add a check: if rawText exists, substring it. Otherwise, return "No text found"
      rawTextPreview: ocrResult.rawText ? ocrResult.rawText.substring(0, 200) + "..." : "No text detected"
    });

  } catch (error) {
    console.error("Pipeline Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
