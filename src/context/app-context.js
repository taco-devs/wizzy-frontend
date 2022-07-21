import React, { useReducer, createContext } from "react";
import axios from "axios";

// Create Context Object
export const AppContext = createContext();

// Axios Initializer
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['auth-token'] = localStorage.getItem('auth-token') || null;

const initialState = {
  axios,
  authToken: localStorage.getItem('auth-token') || null,
  isAuth: !!localStorage.getItem('auth-token'),
  showSideBar: false,
  questionsHistory: [],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      axios.defaults.headers.common['auth-token'] = action.payload;
      localStorage.setItem('auth-token', action.payload);
      return {
        ...state,
        authToken: action.payload,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem('auth-token');
      axios.defaults.headers.common['auth-token'] = null;
      return {
        ...state,
        authToken: null,
        isAuth: false,
      }
    case "SET_QUESTIONS_HISTORY":
      return {
        ...state,
        questionsHistory: action.payload
      }
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        showSideBar: !state.showSideBar
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