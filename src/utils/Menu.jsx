import { NavLink, Outlet, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
 
export default function Menu() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async()=>{
    await logout();
    navigate("/login")
  }
  return (
    <>
      <nav className="w-full h-15 flex justify-center items-center p-4 box-border bg-[var(--color-base-200)]">
        <div className="w-full max-w-screen-xl flex justify-between items-center">
          <div className="flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `inline-block w-[80px] text-center transition-colors duration-200 
              ${
                isActive
                  ? "font-bold text-green-600"
                  : "font-normal text-gray-700 hover:text-green-500"
              }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cars"
              end
              className={({ isActive }) =>
                `inline-block w-[80px] text-center transition-colors duration-200 
              ${
                isActive
                  ? "font-bold text-green-600"
                  : "font-normal text-gray-700 hover:text-green-500"
              }`
              }
            >
              Cars
            </NavLink>
            {user && (
              <NavLink
                to="/mycars"
                className={({ isActive }) =>
                  `inline-block w-[80px] text-center transition-colors duration-200 
              ${
                isActive
                  ? "font-bold text-green-600"
                  : "font-normal text-gray-700 hover:text-green-500"
              }`
                }
              >
                MyCars
              </NavLink>
            )}
          </div>
          {user ? (
            user
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `inline-block w-[80px] text-center transition-colors duration-200 
              ${
                isActive
                  ? "font-bold text-green-600"
                  : "font-normal text-gray-700 hover:text-green-500"
              }`
              }
            >
              Login
              <button onClick={handleLogout}>Logout</button>
            </NavLink>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
