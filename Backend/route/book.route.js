import express from "express";
import { getBook, getPopularBooks, searchBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/popular", getPopularBooks);
router.get("/search", searchBooks); // 👈 Search route

export default router;
