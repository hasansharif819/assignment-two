import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Headers.css'
const Header = () => {

    return (
        <div className='headers'>
            <Navbar collapseOnSelect expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <nav className="navBar">
                            <Nav.Link as={Link} to="/"><button>HOME</button></Nav.Link>
                            <Nav.Link as={Link} to="/products"><button>Products & Service</button></Nav.Link>
                            <Nav.Link as={Link} to="/client"><button>Become a Client</button></Nav.Link>
                            <Nav.Link as={Link} to="/downloads"><button>Downloads</button></Nav.Link>
                            <Nav.Link as={Link} to="/aboutus"><button>About us</button></Nav.Link>
                            </nav>
                        </Nav>
                        
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;