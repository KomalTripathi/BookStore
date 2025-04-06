import express from "express";
import { getBook, getPopularBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/popular", getPopularBooks); // 👈 ADD THIS LINE

export default router;
