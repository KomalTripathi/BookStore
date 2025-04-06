import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminDashboard() {
  const [tab, setTab] = useState("books");
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "", title: "" });

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book");
      setBooks(res.data);
    } catch (err) {
      toast.error("Failed to fetch books");
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4001/admin/users");
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchUsers();
  }, []);

  // Handle add book
  const handleAddBook = async () => {
    try {
      await axios.post("http://localhost:4001/admin/add-book", form);
      toast.success("Book added!");
      setForm({ name: "", price: "", category: "", image: "", title: "" });
      fetchBooks();
    } catch {
      toast.error("Error adding book");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/admin/delete-book/${id}`);
      toast.success("Book deleted");
      fetchBooks();
    } catch {
      toast.error("Error deleting");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="tabs mb-6">
        <button onClick={() => setTab("books")} className={`tab tab-bordered ${tab === "books" && "tab-active"}`}>Books</button>
        <button onClick={() => setTab("add")} className={`tab tab-bordered ${tab === "add" && "tab-active"}`}>Add Book</button>
        <button onClick={() => setTab("users")} className={`tab tab-bordered ${tab === "users" && "tab-active"}`}>Users</button>
        <button onClick={() => setTab("popularity")} className={`tab tab-bordered ${tab === "popularity" && "tab-active"}`}>Book Popularity</button>
      </div>

      {/* BOOKS LIST */}
      {tab === "books" && (
        <div className="grid gap-4">
          {books.map((book) => (
            <div key={book._id} className="p-4 border rounded shadow flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{book.name}</h2>
                <p>Price: ₹{book.price}</p>
              </div>
              <button onClick={() => handleDeleteBook(book._id)} className="btn btn-sm btn-error">Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* ADD BOOK */}
      {tab === "add" && (
        <div className="space-y-4">
          {["name", "price", "category", "image", "title"].map((field) => (
            <input
              key={field}
              placeholder={field}
              className="input input-bordered w-full"
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
          ))}
          <button onClick={handleAddBook} className="btn btn-success">Add Book</button>
        </div>
      )}

      {/* USERS */}
      {tab === "users" && (
        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user._id} className="p-4 border rounded shadow">
              <p><strong>{user.fullname}</strong> — {user.email}</p>
              <p>Wallet: ₹{user.wallet}</p>
            </div>
          ))}
        </div>
      )}

      {/* BOOK POPULARITY */}
      {tab === "popularity" && (
        <div className="grid gap-4">
          {books.sort((a, b) => b.price - a.price).map((book) => (
            <div key={book._id} className="p-4 border rounded shadow">
              <p><strong>{book.name}</strong> — ₹{book.price}</p>
              <p>Category: {book.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
