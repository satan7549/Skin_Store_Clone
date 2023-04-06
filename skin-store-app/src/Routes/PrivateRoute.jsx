import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Auth/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (state.isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace  />;
  }
};

export default PrivateRoute;
