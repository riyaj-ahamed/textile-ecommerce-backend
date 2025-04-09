const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();

// CORS for frontend
const corsOptions = {
  origin: "https://riyaj-ahamed.github.io", // your frontend URL
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Root route for Render health check
app.get('/', (req, res) => {
  res.send('🚀 Textile E-Commerce Backend is Running!');
});

// Routes
app.use('/api/v1/products', productRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) => console.log("❌ DB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
