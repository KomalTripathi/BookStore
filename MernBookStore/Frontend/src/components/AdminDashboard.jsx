import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Logout from "../components/Logout";
import { useAuth } from "../context/AuthProvider";

function AdminDashboard() {
  const [tab, setTab] = useState("books");
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "", title: "" });
  const [authUser] = useAuth();

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book");
      setBooks(res.data);
    } catch (err) {
      toast.error("Failed to fetch books");
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4001/admin/users");
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  const fetchPopularBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book/popular");
      setPopularBooks(res.data);
    } catch (err) {
      toast.error("Failed to fetch popular books");
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchUsers();
    fetchPopularBooks();
  }, []);

  const handleAddBook = async () => {
    try {
      await axios.post("http://localhost:4001/admin/add-book", form);
      toast.success("Book added!");
      setForm({ name: "", price: "", category: "", image: "", title: "" });
      fetchBooks();
      fetchPopularBooks();
    } catch {
      toast.error("Error adding book");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/admin/delete-book/${id}`);
      toast.success("Book deleted");
      fetchBooks();
      fetchPopularBooks();
    } catch {
      toast.error("Error deleting");
    }
  };

  return (
    <div className="p-6 relative">
      {/* Top Bar with Title and Logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        {authUser && (
          <div className="flex items-center gap-3">
            <span className="text-sm">Hello, Admin</span>
            <Logout />
          </div>
        )}
      </div>

      <div className="tabs mb-6">
        <button onClick={() => setTab("books")} className={`tab tab-bordered ${tab === "books" && "tab-active"}`}>Books</button>
        <button onClick={() => setTab("add")} className={`tab tab-bordered ${tab === "add" && "tab-active"}`}>Add Book</button>
        <button onClick={() => setTab("users")} className={`tab tab-bordered ${tab === "users" && "tab-active"}`}>Users</button>
        <button onClick={() => setTab("popularity")} className={`tab tab-bordered ${tab === "popularity" && "tab-active"}`}>Book Popularity</button>
      </div>

      {/* Books List */}
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

      {/* Add Book */}
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

      {/* Users */}
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

      {/* Book Popularity */}
      {tab === "popularity" && (
        <div className="grid gap-4">
          {popularBooks.map((book, index) => (
            <div key={book._id} className="p-4 border rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{index + 1}. {book.name}</p>
                <p className="text-sm text-gray-600">Price: ₹{book.price}</p>
                <p className="text-sm text-gray-500">Category: {book.category}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-bold">
                  {book.purchaseCount || 0} {book.purchaseCount === 1 ? "purchase" : "purchases"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
