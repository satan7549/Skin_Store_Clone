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
      // console.log("reduce", action.payload);
      return {
        ...state,
        total_item: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
