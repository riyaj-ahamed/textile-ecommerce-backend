const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
  placeOrder,
  getOrders
} = require("../controllers/orderController");

// Place a new order (frontend checkout)
router.post("/place", placeOrder);

// Optional: Get all orders (for testing/debugging)
router.get("/placed", getOrders);

// Admin: Get all orders
router.get("/", getAllOrders);

// Admin: Update order status
router.put("/:id/status", updateOrderStatus);

// User: Get orders for a specific user
router.get("/user/:userId", getUserOrders);

// Admin/User: Get order by ID
router.get("/:id", getOrderById);

// Create order (generic version)
router.post("/", createOrder);

module.exports = router;
