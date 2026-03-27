import express from 'express';
import multer from 'multer';
import { testOCR } from '../controllers/transactionController.js';

const router = express.Router();

// Configure Multer to hold the file in memory temporarily
const upload = multer({ storage: multer.memoryStorage() });

// The endpoint: POST /api/transactions/test-ocr
router.post('/test-ocr', upload.single('receipt'), testOCR);

export default router;