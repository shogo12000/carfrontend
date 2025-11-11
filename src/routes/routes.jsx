import Home from "../pages/home";
import Login from "../pages/login";
import Cars from "../pages/cars";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "../utils/Menu";

export default function FRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
