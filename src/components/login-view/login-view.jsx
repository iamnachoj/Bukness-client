//Modules
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import './login-view.scss';


//React-bootstrap
import { Form, Button, Row, Col } from 'react-bootstrap';

//React-router-dom
import {Link} from 'react-router-dom';

//LoginView Component
export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    setValidated(true);
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    axios.post('https://myflix-lounge.herokuapp.com/login', {
      Name: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
    
  };

  return (
    <>
      <Col></Col>
      <Col>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="username"> Username:</Form.Label>
          <Form.Control required type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label className="password"> Password:</Form.Label>
          <Form.Control required type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">Please don't forget your password.</Form.Control.Feedback>
        </Form.Group>
        <Row>
           <Col><Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button></Col>
           <Col xs={12} md={8}><p>Not an user? register <Link to={"/register"}>here</Link></p></Col>
        </Row>
       </Form>
      </Col>
      <Col></Col>
    </>
  );
}

//Proptypes
LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};