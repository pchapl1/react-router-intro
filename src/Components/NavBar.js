import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    return (
        <div className="navBar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
      </div>
    )
}

export default NavBar;