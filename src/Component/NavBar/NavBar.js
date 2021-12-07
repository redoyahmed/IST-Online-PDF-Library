import React from "react";
import istLogo from "../../images/istLogo.png";
import "./NavBar.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar className="navBar" bg='dark' variant="dark" expand="md">
        <Container>
          <img
            className="logoImg"
            style={{ width: "120px", height: "120px", paddingRight: "10px" }}
            src={istLogo}
            alt=""
          />
          <Navbar.Brand style={{ fontSize: "25px" }}>
            IST Online Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link to="/" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link to="/books" className="navLink">
                Books
              </Nav.Link>
              <Nav.Link to="/contact" className="navLink">
                Contact
              </Nav.Link>
              <Nav.Link to="/about" className="navLink">
                About
              </Nav.Link>

              <Nav.Link to="/login" className="navLink">
                Login
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
