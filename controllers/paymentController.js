const Stripe = require("stripe");
require("dotenv").config(); // to load .env variables

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const processPayment = async (req, res) => {
  try {
    const { amount, token } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: token.id,
      confirm: true,
    });

    res.status(200).json({
      success: true,
      message: "Payment processed successfully",
      paymentIntent,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { processPayment };
