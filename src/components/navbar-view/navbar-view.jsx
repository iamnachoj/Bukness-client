import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bukness from "../../../Public/img/Bukness-main.png"
import './navbar-view.scss';
export class NavbarView extends React.Component {
  render(){
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/"><img className="logo-main" src={bukness}/></Navbar.Brand>
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