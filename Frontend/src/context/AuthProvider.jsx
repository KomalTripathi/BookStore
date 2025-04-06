import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const userData = localStorage.getItem("Users");
  const adminData = localStorage.getItem("Admin");

  const [authUser, setAuthUser] = useState(
    userData ? JSON.parse(userData)
    : adminData ? { role: "admin" }
    : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
