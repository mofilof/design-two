import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'

function Menu() {
  return (
    <Navbar className="navColor" expand="lg">
      <Navbar.Brand href="./Home">Style guide</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./Fonts">Fonts</Nav.Link>
          <Nav.Link href="./Color">Colors</Nav.Link>
          <Nav.Link href="./Images">Images</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Menu;
