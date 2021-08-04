//Modules
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

//React-Bootstrap
import {Row, Col, Button} from 'react-bootstrap';

//React-router-dom
import {Link} from 'react-router-dom';

//CSS
import './movie-view.scss';

//MovieView Component
export class MovieView extends React.Component{
 
  addFavorite() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('Name');

    axios.post(`https://myflix-lounge.herokuapp.com/users/${username}/movies/${this.props.movie._id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        alert(`Added to Favorites List`)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

 render(){
   const { movie, onBackClick } = this.props;
   return (
     <Row className="movie-view">
      <Col sm={12} md={7} className="text-center">
        <div className="movie-poster">
         <img src={movie.imagePath} />
        </div>
      </Col>
      <Col className="info">
       <div className="movie-title">
         <span className="label">Title: </span>
         <span className="value">{movie.Title}</span>
       </div>
       <div className="movie-description">
         <span className="label">Description: </span>
         <span className="value">{movie.Description}</span>
       </div>
       <div className="movie-director">
         <span className="label">Director: </span>
         <Link to={"/director/" + movie.Director.Name}><span className="value">{movie.Director.Name}</span></Link>
       </div>
       <div className="movie-genre">
         <span className="label">Genre: </span>
         <Link to={"/genre/" + movie.Genre.Name}><span className="value">{movie.Genre.Name}</span></Link>
       </div>
       <Button onClick={()=> onBackClick()}>Back</Button>
       <Button variant='info' className="fav-button" value={movie._id} onClick={(e) => this.addFavorite(e, movie)}>
          Add to Favorites
        </Button>
      </Col>
     </Row>
   )
 }
}

//Proptypes
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
    ImagePath: PropTypes.string
  }).isRequired
};