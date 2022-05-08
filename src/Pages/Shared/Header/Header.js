
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
                <Container>
                    <img className='px-4' height={30} src={logo} alt="" />
                    <Navbar.Brand as={Link} to="/" className='fw-bold text-warning'>Supershop Grocery Stock
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/inventories">All Inventories</Nav.Link>
                            <NavDropdown title="Check Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="home#terms">Terms and Conditions</NavDropdown.Item>
                                <NavDropdown.Item href="home#covid">Covid Safety</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="item">My Item</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="add">Add Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage Inventory</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;