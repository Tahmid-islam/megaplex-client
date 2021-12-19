import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "#F8F9FA",
          padding: "20px",
          marginTop: "20px",
        }}
        className="border border-3 my-4 rounded-3"
      >
        <Container className="text-center">
          <img
            src={user?.photoURL}
            className="img-fluid"
            style={{ borderRadius: "50%" }}
            alt={user?.displayName}
          />
          <p className="fs-1 fw-bold text-danger">{user?.displayName}</p>
          <p className="fs-5 fw-bold">{user?.email}</p>
          <p className="fw-bold">Thanks for using our Megaplex.</p>
        </Container>
      </div>
    </div>
  );
};

export default DashboardHome;
