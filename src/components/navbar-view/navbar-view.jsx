import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

//img & style
import bukness from "../../../Public/img/Bukness-main.png";
import userIcon from '../../../Public/img/user.png';
import './navbar-view.scss';

export class NavbarView extends React.Component {

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('Name');
    props.setState({
      user: null
    });
  }

  render(){
    const {user} = this.props;
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/"><img className="logo-main" src={bukness}/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><img className="user-icon" src={userIcon}/></Nav.Link>
      <NavDropdown title={user} id="navbarScrollingDropdown">
        <NavDropdown.Item href="/my-profile">Account</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/" onClick={()=>{this.onLoggedOut()}}>Log out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Container>
   </Navbar>
   )
   
 }

}