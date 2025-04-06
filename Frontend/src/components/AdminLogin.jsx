import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = "admin@bookstore.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      const adminData = {
        role: "admin",
        email: adminEmail,
      };

      // Set localStorage and auth context
      localStorage.setItem("Admin", JSON.stringify(true));
      localStorage.setItem("Users", JSON.stringify(adminData));
      setAuthUser(adminData);

      toast.success("Admin login successful");
      navigate("/admin-dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 dark:bg-slate-900 relative">
      {/* Cross Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-2xl font-bold"
      >
        ×
      </button>

      <div className="w-full max-w-md p-8 shadow-xl rounded-xl bg-white dark:bg-slate-800">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-full mt-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
