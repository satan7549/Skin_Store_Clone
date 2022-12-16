import React, { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContextProvider";

export const Cart = () => {
  const {state}=useContext(CartContext);
//next work we have to store data some ware because we find only one data heare 

  console.log("CartPage",state.cart);
  return <div>Cart</div>;
}
