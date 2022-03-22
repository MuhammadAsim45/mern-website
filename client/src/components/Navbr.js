import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbr = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>full stack website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbr;
