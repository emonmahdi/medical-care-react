import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link  } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


import logoImg from '../../Assets/logo.png'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top"  className='medical-navbar bg-light' >
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home"> 
            <img src={logoImg} width='60px' height='60px' className='img-fluid me-2' alt="" />
            Medical Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#about-section">About</Nav.Link>
              <Nav.Link as={HashLink} to="/home#services-section">Services</Nav.Link>
              <Nav.Link as={HashLink} to="/home#blog-section">Blogs</Nav.Link>
              <Nav.Link as={HashLink} to="#pricing">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;