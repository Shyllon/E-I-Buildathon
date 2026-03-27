import app from "./app.js";
import transactionRoutes from './routes/transactionRoutes.js';

// Railway provides a PORT, but we fallback to 5000 for local development
const PORT = process.env.PORT || 5000;

/**
 * 🛠️ HEALTH CHECK ROUTE
 * This is the first thing Railway and the Judges will hit.
 * Placing it here ensures it's always reachable.
 */
app.get('/api', (req, res) => {
  res.json({ 
    status: "active",
    message: "VendorGuard Backend is alive",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

/**
 * 🚀 FUNCTIONAL ROUTES
 */
app.use('/api/transactions', transactionRoutes);

/**
 * 🌐 SERVER START
 */
app.listen(PORT, () => {
  console.log(`VendorGuard Server running on port ${PORT}`);
});