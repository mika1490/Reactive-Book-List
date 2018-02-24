import React from 'react';
import BookListItem from '../../components/BookListItem';

const BookList = ({ books, searchFor }) => {
    
  return(
    <div className="book-list">
    {
      books
      .filter((book) => {
        return book.title.toLowerCase().includes(searchFor.toLowerCase())
      })  
      .map((book, idx) => {
          return(
            <BookListItem 
              title = { book.title } 
              author = { book.author }
              key = {idx}
            />
          )
        })
      }
    </div>
  )
}

export default BookList;