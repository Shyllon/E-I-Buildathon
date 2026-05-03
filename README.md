VendorGuard AI 

Real-time backend fraud detection system for validating payment receipts using OCR, session verification, and replay attack prevention.

Built as a backend-focused system during the Interswitch x Enyata Buildathon 2026, VendorGuard AI focuses on preventing financial fraud through structured API validation and secure transaction processing.

Backend Architecture Overview
Receipt Upload → OCR Text Extraction
Transaction Parsing → Validation Engine
Session ID Verification → Fraud Check Layer
Replay Attack Detection → Duplicate Transaction Blocking
Secure Storage → Supabase with Row-Level Security
 Core Backend Systems
 Replay Attack Detection Engine

Prevents reuse of previously submitted transaction receipts by tracking unique session/transaction IDs.

Session Validation Layer

Validates transaction authenticity using structured Interswitch-compatible identifiers.

Fraud Risk Processing

Applies rule-based scoring to detect anomalies in receipt data.

Secure Data Layer

Uses Supabase RLS to enforce strict access control at database level.

API Design
POST /api/verify-receipt
POST /api/session/validate
GET /api/transactions

Tech Stack

Node.js | Express | Supabase (PostgreSQL) | OCR Engine | REST APIs | Typescript

Team & Contributions

Backend Engineer / System Design (Afolabi Shyllon)

Designed and implemented the fraud detection backend system
Built API architecture for receipt verification and session validation
Developed replay attack detection logic
Integrated Supabase with Row-Level Security (RLS)
Structured backend services (controllers/services separation)

Frontend Engineer (Treasure Ejike)

Built user interface for receipt upload and results display
Integrated backend APIs into frontend workflow

Data Analyst (Oluwabukunmi Odukoya)

Assisted in defining fraud detection rules and validation thresholds

Product Manager (Temiloluwa Madehinlo)

Defined product requirements and user flow for fraud detection system
