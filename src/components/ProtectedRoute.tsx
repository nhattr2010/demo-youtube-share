import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { ERoute } from "../constants/route";
const ProtectedRoute = () => {
  //todo Get User from redux
  const user = null;
  if (!user) {
    // return <Navigate to={ERoute.Home} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
