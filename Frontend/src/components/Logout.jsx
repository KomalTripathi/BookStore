import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      localStorage.removeItem("Admin");
      toast.success("Logged out successfully");

      setTimeout(() => {
        window.location.href = "/"; // Go to homepage regardless of role
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
