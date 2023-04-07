import { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const AuthContext = createContext();

let token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  isAuth: token ? true : false,
  isError: false,
  token: token || "",
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
