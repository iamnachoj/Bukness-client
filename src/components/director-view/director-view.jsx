//Modules
import React from 'react';
import './director-view.scss';

//React-bootstrap 
import { Row, Col, Button } from 'react-bootstrap';

//DirectorView component
export class DirectorView extends React.Component{
  render(){
    const { movie, onBackClick } = this.props;
    return(
      <>
      <Row className="director-view">
        <Col>
       <h1 className="title">Director</h1>
       <div className="director-name">
         <span className="label">Name: </span>
         <span className="value">{movie.Director.Name}</span>
       </div>
       <div className="director-bio">
         <span className="label">Bio: </span>
         <span className="value">{movie.Director.Bio}</span>
       </div>
       <div className="director-birthdate">
         <span className="label">Birth date: </span>
         <span className="value">{movie.Director.Birth}</span>
       </div>
      <Button className="back-button" onClick={() => onBackClick()}>Back</Button>
      </Col>
     </Row>
     
     </>
    )

  }
}