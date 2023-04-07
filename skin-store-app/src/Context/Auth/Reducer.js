const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_LOADIN": {
      return {
        isLoading: true,
        isAuth: false,
        isError: false,
        token: "",
      };
    } 
    case "LOGIN_SUCESS": {
      localStorage.setItem("token",action.payload);
      return {
        isLoading: false,
        isAuth: true,
        isError: false,
        token: action.payload,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        isLoading: false,
        isAuth: false,
        isError: true,
        token: "",
      };
    }
    case "LOGOUT_SUCESS": {
      localStorage.removeItem("token");
      return {
        isLoading: false,
        isAuth: false,
        isError: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
