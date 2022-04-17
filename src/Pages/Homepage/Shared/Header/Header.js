import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='logo text-dark'>Tempest Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home" className='text-dark fw-bold'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className='text-dark fw-bold'>Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='text-dark fw-bold'>About</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="login" className='text-dark fw-bold'>
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