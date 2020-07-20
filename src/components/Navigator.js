import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const Navigator = () => {

    

    return (
        <Navbar expand="md" style={{backgroundColor:'transparent'}}>
            <Navbar.Brand href="#home">
                <h3>ipare Technology</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="" className="nav-link">About Us</Nav.Link>
                    <Nav.Link href="" className="nav-link">Services</Nav.Link>
                    <Nav.Link href="" className="nav-link">Career</Nav.Link>
                    <Nav.Link href="" className="nav-link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigator
