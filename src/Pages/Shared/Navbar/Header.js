import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fw-bold"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bolder">
            Megaplex
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/movies">
                Movies
              </Nav.Link>
              {user.email && (
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {!user.email && (
                <Nav.Link as={NavLink} to="/login">
                  Login/Signup
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={NavLink} to="/" onClick={logout}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
