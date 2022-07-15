import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import logoImg from '../../Assets/logo.png';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
  const { user, logOut } = useAuth();
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


                {
                  user?.email ? (

                <NavDropdown title={user?.email &&  user?.displayName } id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut} href="#">Logout</NavDropdown.Item> 
              </NavDropdown>
                    ):(
                    <Nav.Link as={Link} to="/login">
                        <button className='btn btn-text text-success fw-bold login-nav-item'>Login</button>
                    </Nav.Link>
                    )
              }
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;