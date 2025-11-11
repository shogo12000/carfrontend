import Home from "../pages/home";
import Login from "../pages/login";
import Cars from "../pages/cars";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "../utils/Menu";
import Register from "../pages/register";
export default function FRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
