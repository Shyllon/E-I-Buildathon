import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get("/api", (req, res) => {
  res.json({ message: "Backend is alive" });
});

// Export the app (do NOT start server here)
export default app;