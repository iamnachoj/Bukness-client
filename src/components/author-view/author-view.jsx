//Modules
import React from 'react';
import './author-view.scss';

//React-bootstrap 
import { Row, Col, Button } from 'react-bootstrap';

//AuthorView component
export class AuthorView extends React.Component{
  render(){
    const { book, onBackClick } = this.props;
    return(
      <>
      <Row className="author-view">
        <Col>
       <h1 className="title">Author</h1>
       <div className="author-name">
         <span className="label">Name: </span>
         <span className="value">{book.Author.Name}</span>
       </div>
       <div className="author-bio">
         <span className="label">Bio: </span>
         <span className="value">{book.Author.Bio}</span>
       </div>
       <div className="author-birthdate">
         <span className="label">Birth date: </span>
         <span className="value">{book.Author.Birth}</span>
       </div>
      <Button className="back-button" onClick={() => onBackClick()}>Back</Button>
      </Col>
     </Row>
     
     </>
    )

  }
}