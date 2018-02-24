//updates the state
//Must swap the objects out to let system know that 
//inside the state object there is a key named planets and now replace it with the action.planets the new array/object. 
//the planet comes from within the array and each planet is an object 
import { LOAD_BOOKS } from '../actions/books';
import { ADD_BOOK } from '../actions/books';

const initialState = [];

const bookList = (state = initialState, action = {}) => {
  console.log('REDUCERS:', action);
  switch (action.type) {
    case LOAD_BOOKS: 
      console.log('LOADING THE BOOK');
      return [ ...action.books];
      // return Object.assign({}, state, { bookList : [...action.books] })
    case ADD_BOOK:
    console.log('ACTION2', action)
    console.log('STATE', action.book)
     return Object.assign({}, state, { 
        books : [...action.books]
      })
     
    default: 
      return state;
  }
};

export default bookList;