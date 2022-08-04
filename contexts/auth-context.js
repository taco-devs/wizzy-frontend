import api from "./api";
import React, { createContext } from "react";
import router from "next/router";
import axios from "axios";

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
       //  console.log(response.data)
      if (response.data) {
        return { status: "SIGNED_IN", user: response.data.data };
      } else {
        return { status: "SIGNED_OUT", user: null };
      }
    })
    .catch((error) => {
      return { status: "SIGNED_OUT", user: null };
    });
};
export const AuthProvider = (props) => {
  const auth = props.myAuth || { status: "SIGNED_OUT", user: null };

  const login = async (form) => {
    // Use any auth service methods here
    return await api({
      method: "post",
      url: `/auth/login`,
      data: form,
      withCredentials: true,
    })
      .then(() => {
        router.push("/");
        console.log("user signed in");
      })
      .catch((error) => {
        console.error("Incorrect email or password entered.");
      });
  };

  const register = async (form) => {
    return await api({
      method: "post",
      url: `/auth/register`,
      data: form,
      withCredentials: true,
    })
      .then(function (response) {
        router.push("/");
        alert('We send you an email with a verification code')
        console.log("user registered");
      })
      .catch(function (error) {
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
            console.log('ok?')
            router.push("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ auth, logout, register, login }}
      {...props}
    />
  );
};

export const useAuth = () => React.useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
