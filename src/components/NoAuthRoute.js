import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Routes, Route, Link, Navigate } from 'react-router-dom';

export default function NoAuthRoute(props) {

  const [state, dispatch] = useContext(AppContext);

  const AuthRouter = ({isAuth, children}) => {

    if (isAuth) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return <AuthRouter {...props} isAuth={state.isAuth}/>;
}
