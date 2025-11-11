import Home from "../pages/home";
import Login from "../pages/login";
import Cars from "../pages/cars"
import { BrowserRouter, Routes, Route } from "react-router";

export default function FRoutes() {
  return <BrowserRouter>
    <Routes>
        <Route index element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>;
}
