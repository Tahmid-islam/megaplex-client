import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ overflow: "hidden" }} className="w-100">
      <p className="fs-1 fw-bold bg-dark text-white container-fluid">
        Dashboard
      </p>
      <div>
        <Tab.Container id="left-tabs-example">
          <Row>
            <Col sm={3} className="bg-light">
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <hr />
                <div>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/dashboard">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/dashboard/myOrders">
                      My Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="">
                      Review
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="">
                      Pay
                    </Nav.Link>
                  </Nav.Item>
                </div>
                <hr />
                <div>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/dashboard">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="">
                      My Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="">
                      Review
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="">
                      Pay
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Col>
            <Col sm={9}>
              <Outlet></Outlet>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Dashboard;
