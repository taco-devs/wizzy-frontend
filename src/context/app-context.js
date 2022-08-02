import React, { useReducer, createContext } from "react";
import axios from "axios";

// Create Context Object
export const AppContext = createContext();

// Axios Initializer
console.log('process', process.env)
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://wizzy-ai.herokuapp.com';
axios.defaults.headers.common['auth-token'] = localStorage.getItem('auth-token') || null;

const QUESTION_COST = 100;

const initialState = {
  axios,
  authToken: localStorage.getItem('auth-token') || null,
  isAuth: !!localStorage.getItem('auth-token'),
  account: null,
  showSideBar: false,
  questionsHistory: [],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      }
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
        questionsHistory: [],
        account: null,
      }
    case "SET_QUESTIONS_HISTORY":
      return {
        ...state,
        questionsHistory: action.payload
      }
    case "ADD_QUESTION":
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance - QUESTION_COST,
        },
        questionsHistory: [action.payload, ...state.questionsHistory]
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