import app from "./app.js";
import transactionRoutes from './routes/transactionRoutes.js';

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});