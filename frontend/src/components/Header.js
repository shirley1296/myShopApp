import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {linkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
     <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <linkContainer to="/">
          <Navbar.Brand>MyShop</Navbar.Brand>
          </linkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <linkContainer to="/cart">
               <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </linkContainer>
              <linkContainer to="/login">
              <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
              </linkContainer>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          </header> 
  )
}
  

export default Header