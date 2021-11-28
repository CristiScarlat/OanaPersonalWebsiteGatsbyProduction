import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between" style={{fontSize: 'larger'}}>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow: 0}}>
                <Nav className="mr-auto">
                    <Link to="/" style={{marginRight: '1rem', color: 'grey'}} activeStyle={{color: 'white', fontWeight: 'bold'}}>Home</Link>
                    <Link to="/portofolio" style={{marginRight: '1rem', color: 'grey'}} activeStyle={{color: 'white', fontWeight: 'bold'}}>Paintings</Link>
                    <Link to="/media" style={{marginRight: '1rem', color: 'grey'}} activeStyle={{color: 'white', fontWeight: 'bold'}}>Interviews and media</Link>
                    <Link to="/about" style={{marginRight: '1rem', color: 'grey'}} activeStyle={{color: 'white', fontWeight: 'bold'}}>About me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;