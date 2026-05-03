🛡️ VendorGuard AI
Real-Time Fraud Detection Backend System for Receipt Verification

VendorGuard AI is a backend-focused fraud detection system designed to validate digital and physical payment receipts in real time. It prevents financial fraud through OCR-based extraction, session validation, replay attack detection, and structured risk evaluation.

Built during the Interswitch x Enyata Buildathon 2026, the system demonstrates backend engineering principles in fraud prevention, secure API design, and data integrity enforcement.

🧠 System Architecture Overview

VendorGuard AI is built as a layered backend validation pipeline:

1. Receipt Submission Layer

Users submit receipts via API or frontend interface

2. OCR Processing Layer

Extracts transaction data from uploaded receipt images

3. Validation Engine

Parses extracted data into structured transaction format

4. Session Verification Layer

Validates transaction authenticity using session IDs (Interswitch-compatible logic)

5. Fraud Detection Layer

Detects replay attacks (duplicate or reused transactions)
Applies rule-based fraud scoring

6. Persistence Layer

Stores verified transactions securely in Supabase (PostgreSQL)
Enforced with Row-Level Security (RLS)
⚙️ Core Backend Systems
🔐 Replay Attack Detection Engine

Prevents reuse of previously submitted receipts by tracking unique transaction/session identifiers in real time.

🧾 Session Validation Service

Validates transaction authenticity using structured session ID verification logic inspired by payment gateway systems.

🛡️ Fraud Risk Evaluation Layer

Implements rule-based logic to detect anomalies such as:

Duplicate transactions
Mismatched amounts
Reused receipt data
🗄️ Secure Data Architecture (RLS)

Uses Supabase Row-Level Security to enforce:

Strict access control policies
Data isolation per transaction scope
Protection against unauthorized reads/writes

🌐 API Design (Backend Focus)

RESTful API built using Node.js + Express:

POST /api/verify-receipt → Validate receipt via OCR + fraud engine
POST /api/session/validate → Validate transaction session integrity
GET /api/transactions → Fetch verified transaction logs

All endpoints follow a controller-service architecture pattern for scalability and separation of concerns.

🧱 Backend Architecture Principles
Modular service design (controllers / services separation)
Stateless API design for scalability
Rule-based fraud detection logic (extensible for ML integration)
Secure database interactions via RLS policies
Built for future microservice decomposition

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: Supabase (PostgreSQL)
Security: Row-Level Security (RLS)
OCR Processing: Image-to-text extraction engine
Architecture: REST API, Modular backend services
Version Control: Git & GitHub

🚀 Live System
🔗 Frontend Demo: https://e-i-buildathon.vercel.app/
🔗 Backend API: https://e-i-buildathon-production.up.railway.app
🔗 API Base: https://e-i-buildathon-production.up.railway.app/api

📌 Engineering Highlights
Designed a real-time fraud detection pipeline for receipt validation
Implemented replay attack prevention using transaction state tracking
Built secure backend APIs with structured validation layers
Integrated database-level security using Supabase RLS
Applied separation of concerns for maintainable backend architecture

📊 Impact
Prevents fraudulent receipt reuse in real time
Reduces risk of financial manipulation in digital transactions
Improves merchant trust through structured validation logic
Demonstrates scalable backend system design under real constraints

👥 Team & Contributions

Backend Engineer / System Architect — Afolabi Shyllon

Designed backend architecture for fraud detection pipeline
Built REST APIs for receipt verification and session validation
Implemented replay attack detection logic
Integrated Supabase with Row-Level Security (RLS)
Structured backend into modular service architecture

Frontend Engineer - Treasure Ejike

Built user interface for receipt upload and verification results
Integrated backend APIs into frontend workflow

Data Analyst - Oluwabukunmi Odukoya

Defined fraud detection rules and validation thresholds

Product Manager - Temiloluwa Madehinlo

Defined product requirements and user flow

📌 Project Status
MVP Completed
Actively Improving Backend Logic & System Design

🧠 Final Positioning Statement

VendorGuard AI is a backend fraud detection system demonstrating practical implementation of:

API design
transaction validation logic
security-aware system architecture
scalable backend structuring
