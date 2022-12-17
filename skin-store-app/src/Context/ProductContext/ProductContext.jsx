import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ProductContext = createContext();

const initialState = {
  products: [],
  categoryProduct: [],
  searchProduct: [],
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  // // console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider };
