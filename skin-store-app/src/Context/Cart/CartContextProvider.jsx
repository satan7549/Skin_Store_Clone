import { createContext, useReducer } from "react";
import reducer from "./cartReducer";
export const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

const CartContextProvide = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvide;
