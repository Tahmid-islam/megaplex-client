import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  let { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <CircularProgress />;
  }
  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
