const express = require("express");
const { processPayment } = require("../controllers/paymentController");

const router = express.Router();

// Route for processing payments
router.post("/process", processPayment);

module.exports = router;
