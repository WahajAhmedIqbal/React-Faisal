import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        style={{ position: "fixed", width: "100%", top: 0 }}
      >
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "xx-large",
            }}
          >
            React-Logo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontSize: "x-large",
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                style={{
                  color: "white",
                  fontSize: "x-large",
                }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contactUs"
                style={{
                  color: "white",
                  fontSize: "x-large",
                }}
              >
                Contact-Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
