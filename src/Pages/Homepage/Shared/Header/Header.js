import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='logo text-light'>Tempest Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home" className='text-light fw-bold nav-font'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className='text-light fw-bold nav-font'>Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='text-light fw-bold nav-font'>About</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="login" className='text-light fw-bold nav-font'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;