import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [walletBalance, setWalletBalance] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkBalance = async () => {
    try {
      if (!authUser || !authUser._id) {
        alert("User not logged in");
        return;
      }

      const res = await axios.get(`http://localhost:4001/user/wallet/${authUser._id}`);
      setWalletBalance(res.data.wallet);

      setTimeout(() => {
        setWalletBalance(null);
      }, 2500);
    } catch (err) {
      console.error(err);
      alert("Could not fetch wallet balance");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // optional: clear input after navigating
    }
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Books</a></li>
    </>
  );

  return (
    <>
      {/* Wallet toast notification */}
      {walletBalance !== null && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full flex justify-center pointer-events-none">
          <div className="alert alert-info shadow-lg max-w-sm w-full text-center pointer-events-auto">
            <span>Your wallet balance: ₹{walletBalance.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white transition-all" : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">bookStore</a>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 border rounded-md dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 duration-300"
              >
                Go
              </button>
            </form>

            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="..." />
              </svg>
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="..." />
              </svg>
            </label>

            {authUser && (
              <button onClick={checkBalance} className="btn btn-outline btn-info">
                Check Balance
              </button>
            )}

            {authUser ? (
              <Logout />
            ) : (
              <div className="flex gap-2">
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </a>

                <Link
                  to="/admin-login"
                  className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-800 duration-300"
                >
                  Admin Login
                </Link>

                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
