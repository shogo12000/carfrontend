import Home from "../pages/home";
import Login from "../pages/login";
import Cars from "../pages/cars";
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "../utils/Menu";
import { AuthProvider } from "../context/AuthContext";
import MyCars from "../pages/mycars";
import PrivateRoute from "../utils/PrivateRoute";
import AddCar from "../pages/addcar";
import EditPage from "../pages/edit";

export default function FRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/mycars" element={<MyCars />} />
              <Route path="/addcar" element={<AddCar />} />
              <Route path="/edit/:id" element={<EditPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
