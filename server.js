require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes"); // ✅ Add this line

app.use("/api/auth", authRoutes);
app.use("/api/v1/products", productRoutes); // ✅ Mount product routes here

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Textile E-Commerce Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
