import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ADD THIS HERE - This is the "Nuclear" route
app.get('/', (req, res) => {
  res.send("Root is alive");
});

app.get('/api', (req, res) => {
  res.json({ status: "active", message: "VendorGuard Backend is alive" });
});

export default app;