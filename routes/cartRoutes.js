import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCartItem,
} from "../controllers/cartController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", requireSignIn, addToCart);
router.get("/", requireSignIn, getCart);
router.put("/:productId", requireSignIn, updateCartItem);
router.delete("/:productId", requireSignIn, removeFromCart);

export default router;
