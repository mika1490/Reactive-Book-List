//A function that takes in state and action and returns an updated state
import { combineReducers } from 'redux';
import bookList from './bookList';

//books key is whatever the reducer returns and bookList Value is the reducer function on the booklist.js page
//the state thats getting passed into mappedStateToProps is this Object
export default combineReducers({
  books: bookList
})