import React from 'react';

//const BookList (props) => {
//let books = props.books
//} is the same as below:
//const BookList ({ books }) => {
//
//}
const BookFilterInput = ({ searchFor, resetSearch }) => {


  return (
    <div className="book-filter">
      <input type="text" placeholder="search" onChange={searchFor} />
      <button type="reset" onClick={resetSearch}>Clear</button>
    </div>
  )
}

export default BookFilterInput;
