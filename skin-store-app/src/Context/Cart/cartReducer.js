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
    case "PLACE_ORDER": {
      return {
        ...state,
        order: [...state.order, ...state.cart],
        cart: [],
      };
    }
    case "CANCEL_ORDER": {
      let filter = state.order.filter((ele) => ele.id !== action.payload);
      return {
        ...state,
        order: filter,
      };
    }

    default: {
      return state;
    }
  }
};
export default cartReducer;
