import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import SearchResults from "./components/SearchResults";

function App() {
  const [authUser] = useAuth();
  const isAdmin = JSON.parse(localStorage.getItem("Admin"));

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
          />
          <Route path="/search" element={<SearchResults />} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
