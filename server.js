const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// API Routes
app.use('/api/orders', orderRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Atlas connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
