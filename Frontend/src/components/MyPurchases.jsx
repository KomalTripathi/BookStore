import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function MyPurchases() {
  const [authUser] = useAuth();
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      if (!authUser) return;
      try {
        const res = await axios.get(`http://localhost:4001/user/${authUser._id}/purchases`);
        setPurchasedBooks(res.data);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    };
    fetchPurchases();
  }, [authUser]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">My Purchased Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {purchasedBooks.map((book) => (
          <div key={book._id} className="border p-4 rounded">
            <img src={book.image} alt={book.name} className="w-full h-40 object-cover" />
            <h2 className="mt-2 font-semibold">{book.name}</h2>
            <p className="text-gray-600">${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPurchases;
