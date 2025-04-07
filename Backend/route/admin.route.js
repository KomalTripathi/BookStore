// route/admin.route.js
import express from "express";
import Book from "../model/book.model.js";
import User from "../model/user.model.js";

const router = express.Router();

// Add Book
router.post("/add-book", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
});

// Edit Book
router.put("/edit-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
});

// Delete Book
router.delete("/delete-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.get("/book-popularity", async (req, res) => {
  try {
    const books = await Book.find().sort({ price: -1 }); 
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

export default router;
