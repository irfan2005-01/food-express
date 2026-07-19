import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Orders/Orders";
import Admin from "../pages/Admin/Admin";
import Restaurants from "../pages/Restaurants/Restaurants";
import Offers from "../pages/Offers/Offers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/offers" element={<Offers />} />
      </Route>

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}