import { Outlet, Navigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user, loading, checkUserLogin } = useContext(AuthContext);

  useEffect(() => {
    checkUserLogin();
  }, []);

 
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
