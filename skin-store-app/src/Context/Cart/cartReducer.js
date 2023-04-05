const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let CartData;
      CartData = action.payload;
      return {
        ...state,
        cart: [...state.cart, { ...CartData, qty: 1 }],
      };
    }

    case "DELETE_ITEM_FROM_CART": {
      let filter = state.cart.filter((ele) => ele.id !== action.payload);
      return {
        ...state,
        cart: filter,
      };
    }

    case "INCREMENT_QTY": {
      return {
        ...state,
        cart: state.cart.filter((el) =>
          el.id === action.payload.id ? (el.qty = el.qty + 1) : el.qty
        ),
      };
    }

    case "DECREMENT_QTY": {
      return {
        ...state,
        cart: state.cart.filter((el) =>
          el.id === action.payload.id ? el.qty-- : el.qty
        ),
      };
    }

    default: {
      return state;
    }
  }
};
export default cartReducer;
