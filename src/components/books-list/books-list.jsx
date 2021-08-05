import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { BookCard } from '../book-card/book-card';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function BooksList(props) {
  const { books, visibilityFilter } = props;
  let filteredBooks = books;
  
  if (visibilityFilter !== '') {
    filteredBooks = books.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!books) return <div className="main-view">Oops, seems like that book is not on our list :(</div>;

 return <>
     {/* this Column is missing a key */}
    <Col md={12}  style={{ margin: '1em' }}> 
     <VisibilityFilterInput visibilityFilter={visibilityFilter}  />
    </Col>
   {filteredBooks.map(b => (
   <Col sm={12} md={6} lg={4}><BookCard book={b} key={b._id}/></Col>
   ))}
  </>;
}

export default connect(mapStateToProps)(BooksList);