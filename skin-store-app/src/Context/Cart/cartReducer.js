const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //  console.log("cartreducer",action.payload)
      let CartData;
      CartData = action.payload;
      // ={id,image_link,name,price,price_sign,description,category,brand,product_type}
      return {
        ...state,
        cart: [...state.cart, CartData],
      };
    }
    case "DELETE_ITEM_FROM_CART": {
      let filter = state.cart.filter((ele) => ele.id !== action.payload);
      return {
        ...state,
        cart: filter,
      };
    }

    case "INC_DEC_ITEM": {
      let count = 1;
      let abc = [];
      state.cart.forEach((el) => {
        if (el.id === action.payload && count > 0) {
          count--;
        } else {
          abc.push(el);
        }
      });
      return {
        ...state,
        cart: abc,
      };
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
