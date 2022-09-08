import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function AppNav(){
  return(
      <>
        <Navbar style={{backgroundColor: '#3A5C65'}} expand="lg" className="nav" sticky="top">          
                <Navbar.Brand href="#home" className="ms-3" style={{color: '#A5C9CA'}} as={Link} to="/">QMarketz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto me-2">
                    <Nav.Link style={{color: '#A5C9CA'}} as={Link} to="/users">Users</Nav.Link>
                    <Nav.Link href="#link" style={{color: '#A5C9CA'}} as={Link} to="/create">Create user</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
      </>
    )
}