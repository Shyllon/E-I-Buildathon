import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health check route
app.get("/api", (req, res) => {
  res.json({ message: "Backend is alive" });
});

// Export the app (do NOT start server here)
export default app;