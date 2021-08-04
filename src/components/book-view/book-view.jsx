//Modules
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

//React-Bootstrap
import {Row, Col, Button} from 'react-bootstrap';

//React-router-dom
import {Link} from 'react-router-dom';

//CSS
import './book-view.scss';

//BookView Component
export class BookView extends React.Component{
 
  addFavorite() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('Name');
    
    axios.post(`https://bukness-app.herokuapp.com/users/${username}/books/${this.props.book._id}`, {}, {
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
   const { book, onBackClick } = this.props;
   return (
     <Row className="book-view">
      <Col sm={12} md={7} className="text-center">
        <div className="book-poster">
         <img src={book.imagePath} />
        </div>
      </Col>
      <Col className="info">
       <div className="book-title">
         <span className="label">Title: </span>
         <span className="value">{book.Title}</span>
       </div>
       <div className="book-description">
         <span className="label">Description: </span>
         <span className="value">{book.Description}</span>
       </div>
       <div className="book-author">
         <span className="label">Author: </span>
         <Link to={"/author/" + book.Author.Name}><span className="value">{book.Author.Name}</span></Link>
       </div>
       <div className="book-genre">
         <span className="label">Genre: </span>
         <Link to={"/genre/" + book.Genre.Name}><span className="value">{book.Genre.Name}</span></Link>
       </div>
       <Button onClick={()=> onBackClick()}>Back</Button>
       <Button variant='info' className="fav-button" value={book._id} onClick={(e) => this.addFavorite(e, book)}>
          Add to Favorites
        </Button>
      </Col>
     </Row>
   )
 }
}

//Proptypes
BookView.propTypes = {
  book: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
    ImagePath: PropTypes.string
  }).isRequired
};