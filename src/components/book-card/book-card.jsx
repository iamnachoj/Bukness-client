//Modules
import React from 'react';

//React-bootstrap
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

//CSS
import './book-card.scss';

//BookCard Component
export class BookCard extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <Card className="book-card">
        <Card.Img variant="top" className="img-book" src={book.imagePath} />
        <Card.Body className="book-card text-center">
          <Card.Title className="card-text">{book.Title}</Card.Title>
          <Link to={"/books/" + book._id}>
          <Button variant="light">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}