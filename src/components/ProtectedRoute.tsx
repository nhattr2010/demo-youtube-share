import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { ERoute } from "../constants/route";
import { useSelector } from "react-redux";
import { selectUserData } from "../selectors/user";

const ProtectedRoute = () => {
  const user = useSelector(selectUserData);
  if (!user.email) {
    return <Navigate to={ERoute.Home} replace/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
