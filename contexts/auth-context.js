import api from "./api";
import React, { createContext, useReducer } from "react";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import router from "next/router";
import axios from "axios";

const initialState = {
  error: null,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
        return {
            ...state,
            error: false,
            loading: true,
        }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "DISMISS": 
      return {
          ...initialState
      }
    default:
      throw new Error();
  }
};

const AuthContext = createContext();

export const getUser = async (ctx) => {
  return await api
    .get(`/auth/token`, {
      headers: ctx?.req?.headers?.cookie
        ? { cookie: ctx.req.headers.cookie }
        : undefined,
      withCredentials: true,
    })
    .then((response) => {
      setCookie('session', response.data.data.cookie.session);
      if (response.data) {
        return { status: "SIGNED_IN", user: response.data.data.user };
      } else {
        return { status: "SIGNED_OUT", user: null };
      }
    })
    .catch((error) => {
      return { status: "SIGNED_OUT", user: null };
    });
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const auth = props.myAuth || { status: "SIGNED_OUT", user: null };

  const login = async (form) => {
    dispatch({type: 'SET_LOADING'});
    // Use any auth service methods here
    return await api({
      method: "post",
      url: `/auth/login`,
      data: form,
      withCredentials: true,
    })
      .then((res) => {
        const {session} = res.data.cookies;
        setCookie('session', session);
        router.push("/");
        dispatch({type: 'DISMISS'});
        console.log("user signed in");
      })
      .catch((error) => {
        dispatch({
          type: "SET_ERROR",
          payload: "Invalid login",
        });
        console.error("Incorrect email or password entered.");
      });
  };

  const register = async (form) => {
    dispatch({type: 'SET_LOADING'});
    return await api({
      method: "post",
      url: `/auth/register`,
      data: form,
      withCredentials: true,
    })
      .then(function (response) {
        router.push("/");
        alert("We send you an email with a verification code");
        dispatch({type: 'DISMISS'});
        console.log("user registered");
      })
      .catch(function (error) {
        dispatch({
            type: "SET_ERROR",
            payload: "Invalid signup",
          });
        console.error(error.message);
      });
  };

  const logout = async () => {
    return await api({
      method: "get",
      url: `/auth/logout`,
      withCredentials: true,
    })
      .then(() => {
        deleteCookie('session');
        console.log("ok?");
        router.push("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ state, auth, logout, register, login, dispatch }}
      {...props}
    />
  );
};

export const useAuth = () => React.useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
