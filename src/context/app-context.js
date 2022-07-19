import React, { useReducer, createContext } from "react";

// Create Context Object
export const AppContext = createContext();

const initialState = {
  authToken: localStorage.getItem('auth-token') || null,
  isAuth: !!localStorage.getItem('auth-token'),
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem('auth-token', action.payload);
      return {
        authToken: action.payload,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem('auth-token');
      return {
        authToken: null,
        isAuth: false,
      }
    default:
      throw new Error();
  }
};

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = props => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};