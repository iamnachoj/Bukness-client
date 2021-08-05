import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

//img & style
import bukness from "../../../Public/img/Bukness-main.png";
import userIcon from '../../../Public/img/user.png';
import './navbar-view.scss';

export class NavbarView extends React.Component {
  
  render(){
    const {user} = this.props;
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/"><img className="logo-main" src={bukness}/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/my-profile"><img className="user-icon" src={userIcon}/>{user}</Nav.Link>
    </Nav>
    </Container>
   </Navbar>
   )
   
 }

}