# 🛡️ VendorGuard AI  
**Real-Time Fraud Detection System for Receipt Verification**

VendorGuard AI is a sophisticated security layer designed to protect merchants from receipt manipulation and financial fraud. By combining *AI-driven OCR*, *Replay Attack Protection*, and *Dynamic Risk Scoring*, we provide instant verification for digital and physical transaction receipts.

Built during the **Interswitch x Enyata Buildathon 2026**, the system leverages OCR intelligence and transaction validation logic to identify fraudulent payment confirmations before they cause financial loss.

Live Links
- *Frontend (Live Demo):* https://e-i-buildathon.vercel.app/
- *Backend Repository:* https://e-i-buildathon-production.up.railway.app
- *API Endpoint:* https://e-i-buildathon-production.up.railway.app/api

## Problem Statement

Digital merchants increasingly rely on **payment receipts and transaction confirmations**. However, fraudsters exploit this by:

- Reusing valid receipts (**Replay Attacks**)  
- Editing screenshots to fake successful payments  
- Presenting manipulated transaction proofs  

This leads to **revenue leakage and trust issues** for businesses.

## Solution

VendorGuard AI provides:

-  **Real-time receipt verification**
-  **OCR-powered text extraction**
-  **Session ID validation (Interswitch-compatible)**
-  **Replay attack detection**
-  **Secure transaction logging**

## ⚙️ Core Features

- **Receipt Scanning & OCR Processing**  
  Extracts transaction details from uploaded receipts  

- **Session ID Verification Engine**  
  Validates transaction authenticity using structured logic  

- **Replay Attack Detection**  
  Flags duplicate or previously used transaction IDs  

- **Secure Data Layer (RLS Enabled)**  
  Ensures row-level access control for transaction integrity  

- **RESTful API Architecture**  
  Scalable and modular backend services  

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Database:** Supabase (PostgreSQL)  
- **Security:** Row-Level Security (RLS)  
- **AI/OCR:** OCR Processing (Custom Logic)  
- **Version Control:** Git & GitHub  

## Key Engineering Decisions

### 1. **Replay Attack Prevention**
We implemented logic to:
- Track unique transaction/session IDs  
- Flag duplicates in real-time  
- Prevent reuse across multiple submissions  

### 2. **Row-Level Security (RLS)**
Used Supabase RLS to:
- Protect sensitive transaction data  
- Enforce strict access control  
- Ensure high data integrity  

### 3. **Scalable API Design**
- Modular route structure  
- Separation of concerns (controllers/services)  
- Designed for future microservice extension  

## 📈 Impact

-  Prevents fraudulent receipt reuse  
-  Enables real-time fraud detection  
-  Improves trust in digital transactions  
-  Protects merchants from financial loss
  
How to Run & Test
1. *Clone the Repo:* `git clone https://github.com/Shyllon/E-I-Buildathon.git`
2. *Install Dependencies:* `npm install`
3. *Environment Variables:*
   - Create a `.env` file in the frontend.
   - Add `VITE_API_URL=https://e-i-buildathon-production.up.railway.app/api`.
4. *Testing Fraud Detection:*
   - *Test 1 (Verified):* Upload a new receipt with the correct amount.
   - *Test 2 (Replay):* Upload the same receipt again. The system will trigger a `REPLAY_ATTACK_DETECTED` flag.
   - *Test 3 (Tamper):* Enter an expected amount that does not match the receipt text.

The Team
- *Strategic Lead & Backend Engineer:* Afolabi Shyllon
- *Frontend Lead:* Treasure Ejike
- *Data Analyst:* Oluwabukunmi Odukoya
- *Product Manager:* Temiloluwa Madehinlo

   Future Improvements
Integration with live payment provider APIs
Machine learning-based fraud scoring
Dashboard for fraud analytics
Multi-currency and multi-provider support

📌 Project Status

 MVP Completed
 Actively improving

 Acknowledgment

Built during the Interswitch x Enyata Buildathon 2026, focused on solving real-world fintech fraud challenges. VendorGuard AI: Real-Time Fraud Prevention Scanner
*Built for the Enyata x Interswitch Buildathon 2026*

## 🔑 Demo Credentials (If Required)
*No login required for the public demo. Simply navigate to the Scanner page.*
