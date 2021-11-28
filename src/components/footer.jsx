import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className="p-0">
        <Nav className="mr-auto">
          <Nav.Link href="https://www.facebook.com/oana.bleich"><FontAwesomeIcon icon={faFacebook} size="1x"/></Nav.Link>
          {/* <Nav.Link href="https://www.linkedin.com/in/cristian-scarlat-6839a942"><FontAwesomeIcon icon={faLinkedin} size="1x"/></Nav.Link> */}
        </Nav>
      </Navbar>
    )
}

export default Footer;