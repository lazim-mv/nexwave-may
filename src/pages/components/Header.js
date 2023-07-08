import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="hContainer">
      <Navbar
        bg="transparent"
        variant="dark"
        expand="lg"
        className="position-sticky top-0 left-0 right-0"
      >
        <Container>
          <Navbar.Brand>
            <Link
              // activeClass="active"
              to="heroNew"
              spy={true}
              smooth={true}
              duration={500}
              className="hLogo"
            >
              nexwave
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto hList">
              <Nav.Item className="Home">
                <Link
                  // activeClass="active"
                  to="heroNew"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item className="Home">
                <Link
                  // activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className="ms-auto headerContact">
              <Nav.Item >
              <Link
                  // activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hbtn"
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
