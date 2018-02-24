import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../../actions/books';
import './App.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList/index';
import NewBookForm from '../NewBookForm/index';
import BookFilterInput from '../../components/BookFilterInput'


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

  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title="Book List" />

        <BookFilterInput
          searchFor={this.setSearchFor.bind(this)}
        />

        <BookList
          books={this.props.books}
          searchFor={this.state.searchFor}
        />

        <NewBookForm />
      </div>
    );
  }
}

//gives us access to the state thats the store and the store will have multiple keys representing state.
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => {
      loadBooks()
        .then((books) => {
          dispatch(books)
        })
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;