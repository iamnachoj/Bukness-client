//Modules
import React from 'react';
import './genre-view.scss';

//React-bootstrap
import { Row, Col, Button } from 'react-bootstrap';


//GenreView component
export class GenreView extends React.Component{
  render(){
    const { movie, onBackClick } = this.props;
    return(
      <>
      <Row className="genre-view">
        <Col>
       <h1 className="title">Genre</h1>
       <div className="genre-name">
         <span className="label">Name: </span>
         <span className="value">{movie.Genre.Name}</span>
       </div>
       <div className="genre-description">
         <span className="label">Description: </span>
         <span className="value">{movie.Genre.Description}</span>
       </div>
       <Button className="back-button" onClick={() => onBackClick()}>Back</Button>
      </Col>
     </Row>
     
     </>
    )

  }
}