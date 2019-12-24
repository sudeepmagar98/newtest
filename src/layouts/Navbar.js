import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
class Navbars extends Component {
  render() {
    return (
      <NavWrapper>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Movies DB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link class="nav-link" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.div`
  background-color: #6b6666;
  a {
    color: #fff !important;
  }
`;
export default Navbars;
