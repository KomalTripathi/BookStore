import express from "express";
import { purchaseBook } from "../controller/purchase.controller.js";

const router = express.Router();

router.post("/", purchaseBook);

export default router;
