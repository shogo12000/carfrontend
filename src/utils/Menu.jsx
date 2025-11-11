import { NavLink, Outlet } from "react-router";

export default function Menu() {
  return (
    <>
      <nav className="w-full flex justify-between items-center p-4 box-border bg-[var(--color-base-200)]">
        <div className="flex gap-5">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/cars" end>
            Cars
          </NavLink>
        </div>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
