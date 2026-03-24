import fs from 'fs/promises';
import path from 'path';

export const verifyTransaction = async (receiptRef) => {
  try {
    // 1. Read the Mock "Truth" file
    const dataPath = path.join(process.cwd(), 'src/data/interswitch_mock.json');
    const rawData = await fs.readFile(dataPath, 'utf-8');
    const mockDb = JSON.parse(rawData);

    // 2. Search for the transaction reference
    const record = mockDb.find(t => t.transaction_ref === receiptRef);

    if (!record) {
      return { 
        success: false, 
        reason: "NOT_FOUND", 
        message: "Transaction reference does not exist in Interswitch records." 
      };
    }

    // 3. Return the "Truth" for comparison
    return {
      success: true,
      data: record
    };

  } catch (error) {
    console.error("Interswitch Mock Error:", error);
    return { success: false, reason: "SERVER_ERROR" };
  }
};