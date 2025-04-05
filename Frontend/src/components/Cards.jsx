import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function Cards({ item }) {
  const [authUser, setAuthUser] = useAuth();
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // "success" or "error"
  const [showConfirm, setShowConfirm] = useState(false); // modal toggle

  const handleConfirmPurchase = async () => {
    try {
      const res = await axios.post("http://localhost:4001/user/purchase", {
        userId: authUser._id,
        bookId: item._id,
        price: item.price,
      });

      const { walletBefore, walletAfter } = res.data;
      setAuthUser({ ...authUser, wallet: walletAfter });

      setToastMessage(
        `Purchase successful!\nWallet before: $${walletBefore}\nWallet after: $${walletAfter}`
      );
      setToastType("success");
      setTimeout(() => setToastMessage(""), 2000);
    } catch (error) {
      setToastMessage(error.response.data.message || "Something went wrong!");
      setToastType("error");
      setTimeout(() => setToastMessage(""), 2000);
    } finally {
      setShowConfirm(false); // close modal
    }
  };

  const handleBuyClick = () => {
    if (!authUser) {
      setToastMessage("Please log in to buy a book!");
      setToastType("error");
      setTimeout(() => setToastMessage(""), 2000);
    } else {
      setShowConfirm(true); // show modal
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <button
              onClick={handleBuyClick}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      {toastMessage && (
        <div
          className={`toast toast-top toast-center ${
            toastType === "success" ? "toast-success" : "toast-error"
          }`}
          style={{ zIndex: 9999 }}
        >
          <div className="alert w-96 text-lg font-semibold whitespace-pre-line">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg w-96 text-center space-y-4">
            <h2 className="text-xl font-bold">Confirm Purchase</h2>
            <p className="text-md">
              Do you want to buy{" "}
              <span className="font-semibold">{item.name}</span> for{" "}
              <span className="text-pink-600">${item.price}</span>?
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={handleConfirmPurchase}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
