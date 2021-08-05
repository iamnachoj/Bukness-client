import { combineReducers } from "redux";

import { SET_FILTER, SET_BOOKS, SET_USER } from "../actions/actions";

function visibilityFilter(state = '', action) {
  switch (action.type){
    case SET_FILTER:
       return action.value;
    
    default: 
       return state;
  }
}

function books(state = [], action){
  switch (action.type) {
    case SET_BOOKS:
       return action.value;
    default:
       return state;
  }
}


function user(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.value;
    default:
      return state;
  }
}

/* Combined reducer that splits into two smaller reducers. */

// function booksApp( state = {}, action){
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     books: books(state.books, action)
//   }
// }

/* more elegantly, we use the built-in redux function 'combineReducers()', but it means the same than before */

const bookApp = combineReducers({
  visibilityFilter,
  books,
  user
});

export default bookApp;