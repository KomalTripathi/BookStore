import express from "express";
import { signup, login, purchaseBook, getWalletBalance } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/purchase", purchaseBook);  // New route for purchase
router.get("/wallet/:id", getWalletBalance);

export default router;
