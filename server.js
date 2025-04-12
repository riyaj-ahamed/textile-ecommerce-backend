require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require('mongoose');

const app = express();
connectDB();

const allowedOrigins = [
  "http://localhost:3000",
  "https://your-frontend.vercel.app"
];

app.use(cors({
  origin: 'https://your-frontend.vercel.app',  // ✅ Update this if needed
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/v1/products", require("./routes/productRoutes"));

app.get("/", (req, res) => {
  res.send("🚀 Textile E-Commerce Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
