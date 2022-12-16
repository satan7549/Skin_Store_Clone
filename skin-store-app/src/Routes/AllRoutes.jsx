import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
