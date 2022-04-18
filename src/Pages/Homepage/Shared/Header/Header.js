import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
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
                            <Nav.Link as={Link} to="/blogs" className='text-light fw-bold nav-font'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='text-light fw-bold nav-font'>About Me</Nav.Link>
                            {
                                user ?
                                    <Button className='btn btn-dark btn-font  text-light' onClick={handleSignOut}>Sign Out</Button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="login" className='text-light fw-bold nav-font'>
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;