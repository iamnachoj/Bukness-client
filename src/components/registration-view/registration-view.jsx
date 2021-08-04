//Modules
import React, { useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";

//React-Bootstrap
import { Form, Button, Col } from 'react-bootstrap';

//React-Router-Dom
import {Link} from 'react-router-dom'

//CSS
import "./registration-view.scss";

//RegistrationView Component
export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    setValidated(true);
    e.preventDefault();
    console.log(username, password, email, birthdate);
    axios.post('https://myflix-lounge.herokuapp.com/users', {
      Name: username,
      Password: password,
      Email: email,
      Birthday: birthdate
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self');
    })
    .catch(e => {
      console.log('lacks information, or incorrect format')
    });
  };

  return (
 <>
   <Col></Col>
   <Col>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
       <Form.Label className="username form-label"> Username:
         <Form.Control required type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
       </Form.Label>
       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label className="password"> Password:
        <Form.Control required type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
       </Form.Label>
       <Form.Control.Feedback>Looks secure enough</Form.Control.Feedback>
       <Form.Control.Feedback type="invalid">
            Please provide a password that is longer than 6 characters
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label className="email">E-mail:
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
       </Form.Label>
       <Form.Control.Feedback>correct E-mail!</Form.Control.Feedback>
       <Form.Control.Feedback type="invalid">
            Please provide a valid E-mail.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label className="birthdate">Birth date:
        <Form.Control required type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
       </Form.Label>
      </Form.Group>
      <Button className="registerBtn" type="submit" onClick={handleSubmit}>
        Register
      </Button>
      <p>Already registered? go to <Link to={"/"}>Log in page</Link></p>
    </Form>
  </Col>
  <Col></Col>
</>
  );
}


//Proptypes
RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
  })
}