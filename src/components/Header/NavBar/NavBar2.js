import React from 'react';

import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const NavBar2 = () => {
    return ( 
        <>
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark">
            <Navbar.Brand href="/" className="logo"><h1>THE MUSEUM</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">VISITA</Nav.Link>
                <Nav.Link href="#link">COSA VEDERE</Nav.Link>
                <Nav.Link href="#link">CHI SIAMO</Nav.Link>
                <Nav.Link href="#link">ATTIVITA'</Nav.Link>
                <Nav.Link href="#link">AGENDA</Nav.Link>
                <Nav.Link href="#link" className="redLink">ENG</Nav.Link>
                <Nav.Link href="#link" className="redLink"><FaFacebookF /></Nav.Link>
                <Nav.Link href="#link" className="redLink"><FaInstagram /></Nav.Link>
                <Nav.Link href="#link" className="redLink"><FaTwitter /></Nav.Link>
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>*/}
                </Nav>
                {/*<Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>*/}
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar2;