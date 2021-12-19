import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  let { user, isLoading, isAdmin } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <Spinner animation="grow" variant="dark" className="text-center" />;
  }

  if (user.email && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
