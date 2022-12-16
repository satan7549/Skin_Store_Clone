import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";
import { SingleProduct } from "../Pages/SingleProduct";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
