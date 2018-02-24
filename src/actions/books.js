//Creates Action Objects so you can dispatch it later as an object
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../lib/books.db';
export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const loadBooks = () => {
  console.log('ACTION');


  return getBooksFromFakeXHR()
    .then(books => {
      return {
        type: LOAD_BOOKS,
        books: books
      };
    })
}

export const addBook = (book) => {
console.log('AddBOOK', book)
  return addBookToFakeXHR(book)
    .then(book => {
      console.log('HI', book)
      return {
        type: ADD_BOOK,
        books: book
      }
    })
}
