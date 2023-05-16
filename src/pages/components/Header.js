import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="hContainer">
      <Navbar bg="transparrent" variant="dark" expand="lg" className="position-sticky top-0 left-0 right-0">
        <Container >
          <Navbar.Brand href="#">nexwave</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto hList">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
            </Nav>
            <Nav className="ms-auto headerContact">
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
