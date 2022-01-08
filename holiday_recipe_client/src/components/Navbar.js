import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'

 function NavBar() {
    return (
        
        <div id='navbar'>
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            -
            <NavLink to='/recipes'>Holiday Recipes</NavLink>
            -
            <NavLink to='/activities'>Holiday Acitivities</NavLink>

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}
export default NavBar
