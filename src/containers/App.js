import React, { Component } from 'react';
import './App.css';
import { getBooksFromFakeXHR } from '../lib/books.db';
import { addBookToFakeXHR } from '../lib/books.db';
// import { getBookByIdFromFakeXHR } from '../lib/books.db';
import BookListAppTitle from '../components/BookListAppTitle';
import BookList from './BookList/index';
import NewBookForm from './NewBookForm/index';
import BookFilterInput from '../components/BookFilterInput'

class App extends Component {
  constructor() {
    super()
    this.state = { bookList: [], searchFor: '' }
    this.setSearchFor = this.setSearchFor.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  setSearchFor(element) {
    const searchFor = element.target.value;
    this.setState({ searchFor })
  }
  
  resetSearch() {
    this.setState({
      searchFor: ''
    })
  }

  addBook(book) {
    let newBook = {
      title: book.title,
      author: book.author
    }


    addBookToFakeXHR(newBook)
      .then(bookList => {
        this.setState({
          bookList
        })
      })
  }

  componentDidMount() {
    getBooksFromFakeXHR()
      .then(bookList => {
        this.setState({
          bookList
        })
      })
  }
  render() {

    return (
      <div className="App">

        <BookListAppTitle title='Mika&#39;s Book List' />
        
        <BookFilterInput searchFor={ this.setSearchFor } resetSearch={this.resetSearch} />

        <BookList books={ this.state.bookList } searchFor={this.state.searchFor} />

        <NewBookForm addBook={ this.addBook.bind(this) } />


      </div>
    )
  }
}

export default App;
