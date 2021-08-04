//Modules
import React from 'react';
import PropTypes from 'prop-types';

//React-bootstrap
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

//CSS
import './movie-card.scss';

//MovieCard Component
export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Card className="movie-card">
        <Card.Img variant="top" className="img-movie" src={movie.imagePath} />
        <Card.Body className="movie-card text-center">
          <Card.Title className="card-text">{movie.Title}</Card.Title>
          <Link to={"/movies/" + movie._id}>
          <Button variant="light">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}