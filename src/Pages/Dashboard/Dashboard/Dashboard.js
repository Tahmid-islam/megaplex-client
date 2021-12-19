import React from "react";
import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { logout, isAdmin } = useAuth();
  return (
    <div style={{ overflow: "hidden" }} className="w-100">
      <p className="fs-1 fw-bold bg-dark text-white container-fluid">
        Dashboard
      </p>
      <div>
        <Row>
          <Col sm={2} className="border shadow px-2 rounded-3">
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav
                    defaultActiveKey="/dashboard"
                    className="flex-column fw-bold"
                  >
                    <Nav.Link as={NavLink} to="/">
                      <i className="fas fa-home"></i> Home
                    </Nav.Link>
                    <hr />

                    {!isAdmin && (
                      <div>
                        <Nav.Link as={NavLink} to="/dashboard">
                          Profile
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/myOrders">
                          My Orders
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/review">
                          Review
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/payment">
                          Pay
                        </Nav.Link>
                        <hr />
                      </div>
                    )}

                    {isAdmin && (
                      <div>
                        <Nav.Link as={NavLink} to="/dashboard/makeAdmin">
                          Make Admin
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/manageOrders">
                          Manage Orders
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/manageMovies">
                          Manage Movies
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard/addMovie">
                          Add Movie
                        </Nav.Link>
                        <hr />
                      </div>
                    )}

                    <div>
                      <Nav.Link onClick={logout} as={NavLink} to="/">
                        Logout
                      </Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col sm={10} className="container-fluid">
            <Outlet></Outlet>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
