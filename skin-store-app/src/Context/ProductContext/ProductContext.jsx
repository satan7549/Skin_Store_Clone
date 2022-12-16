import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const ProductContext = createContext();

const API = `https://backenddataskinproducts-production.up.railway.app/api/skinproducts`;

const initialState = {
  products: [],
  categoryProduct: [],
};

const ProductContextProvider = ({ children }) => {
  // // console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    try {
      const res = await axios.get(url);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvider, useProductContext };
