VendorGuard AI: Real-Time Fraud Prevention Scanner
*Built for the Enyata x Interswitch Buildathon 2026*

VendorGuard AI is a sophisticated security layer designed to protect merchants from receipt manipulation and financial fraud. By combining *AI-driven OCR*, *Replay Attack Protection*, and *Dynamic Risk Scoring*, we provide instant verification for digital and physical transaction receipts.

Live Links
- *Frontend (Live Demo):* https://e-i-buildathon.vercel.app/
- *Backend Repository:* e-i-buildathon-production.up.railway.app
- *API Endpoint:* `https://e-i-buildathon-production.up.railway.app/api`

The "Intelligence" Layer (Task 3.0)
Unlike simple scanners, VendorGuard employs a *Triple-Check Security Logic*:

1. *Replay Attack Protection:* We hash and store every unique Interswitch Session ID in a Supabase database. If a fraudster attempts to reuse the same receipt for a second transaction, the system flags it as a **100% Critical Risk**.
2. *Digital Alteration Detection:* Our engine extracts the actual numerical amount from the receipt image and compares it against the merchant's expected amount. If they differ by even 1 Naira, the transaction is **Flagged for Mismatch**.
3. *Stale Receipt Perimeter:* We verify the transaction timestamp. Receipts older than 3 days are flagged as *High Risk* to prevent the use of "expired" payment proofs.

Technical Stack
- *Frontend:* React, TypeScript, Vite, Tailwind CSS (Mobile-First Design).
- *Backend:* Node.js, Express, OCR Intelligence Engine.
- *Database:* Supabase (PostgreSQL) for transaction ledgering and duplicate prevention.
- *Infrastructure:* Vercel (Frontend) & Railway (Backend).

How to Run & Test
1. *Clone the Repo:* `git clone [REPO_URL]`
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

## 🔑 Demo Credentials (If Required)
*No login required for the public demo. Simply navigate to the Scanner page.*
