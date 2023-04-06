import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";
import { SingleProduct } from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../Pages/OrderPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
