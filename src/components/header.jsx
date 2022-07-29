import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby'

const Header = () => {
    const getPropsForLink = ({isCurrent, ...rest}) => { 
        return isCurrent ? {style: {color: 'white', fontWeight: 'bold', marginRight: '1rem'} } : {style: {marginRight: '1rem', color: 'grey'}}
    }
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between" style={{fontSize: 'larger'}}>
            <Navbar.Brand style={{fontSize: '14px'}}>Phd artist Oana Bolog-Bleich</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow: 0}}>
                <Nav className="mr-auto">
                    <Link to="/" getProps={getPropsForLink}>Home</Link>
                    {/* <Link to="/portofolio/hypnotic" getProps={getPropsForLink}>Paintings</Link> */}
                    <Link to="/media" getProps={getPropsForLink}>Interviews and media</Link>
                    <Link to="/about" getProps={getPropsForLink}>About me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;