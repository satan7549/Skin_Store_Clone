import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const ProductContext = createContext();

const API = `https://backenddataskinproducts-production.up.railway.app/api/skinproducts`;

const initialState = {
  products:[],
  categoryProduct:[],
  searchProduct:[],
  singleProduct:{}
};

const ProductContextProvider = ({ children }) => {
  // // console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{state,dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};



export { ProductContextProvider };
