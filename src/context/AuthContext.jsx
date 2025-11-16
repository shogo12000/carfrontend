import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUserLogin = async () => {
    setLoading(true);
    try {
      // const res = await fetch("http://localhost:3000/cars/login", {
      const res = await fetch("http://localhost:3000/cars/userstatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
 
      if (res.ok) {
        setUser(data.user.username || null);
      } else {
        setUser(null);
        console.log(data);
        console.log("Anonymous User");
      }
    } catch (err) {
      console.log("User is not logged");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider value={{ loading, user, checkUserLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
