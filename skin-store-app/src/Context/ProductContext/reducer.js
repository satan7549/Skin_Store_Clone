export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case "GET_CATEGORY_PRODUCTS": {
      return {
        ...state,
        categoryProduct: action.payload,
        isLoading: false,
      };
    }
    case "GET_SINGLE_PRODUCT": {
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
      };
    }
    case "GET_PRODUCT_BY_SEARCH": {
      return {
        ...state,
        searchProduct: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
