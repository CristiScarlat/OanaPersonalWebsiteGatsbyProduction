import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby'

const Header = () => {
    const getPropsForLink = ({isCurrent}) => { 
        return isCurrent ? {style: {color: 'white', fontWeight: 'bold', marginRight: '1rem'} } : null
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between" style={{fontSize: 'larger'}}>
            <Navbar.Brand style={{fontSize: '14px'}}>Phd artist Oana Bolog-Bleich</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow: 0}}>
                <Nav className="mr-auto">
                    <Link to="/" style={{marginRight: '1rem', color: 'grey'}} getProps={getPropsForLink}>Home</Link>
                    <Link to="/portofolio" style={{marginRight: '1rem', color: 'grey'}} getProps={getPropsForLink}>Paintings</Link>
                    <Link to="/media" style={{marginRight: '1rem', color: 'grey'}} activeStyle={{color: 'white', fontWeight: 'bold'}}>Interviews and media</Link>
                    <Link to="/about" style={{marginRight: '1rem', color: 'grey'}} getProps={getPropsForLink}>About me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;