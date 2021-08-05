import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export class NavbarView extends React.Component {
  render(){
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
   </Navbar>
   )
   
 }

}