import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions/books';

class NewBookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: ''
    }
    console.log(this.props)
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangeAuthor = this.handleOnChangeAuthor.bind(this);
  }
  handleSubmit(element) {
    element.preventDefault();
    this.props.addBook({
      title: this.state.title,
      author: this.state.author
    })
    this.setState({
      title: '',
      author: ''
    })
  }
  handleOnChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleOnChangeAuthor(event) {
    this.setState({ author: event.target.value })
  }

  render() {
    return (
      <div className="newBookForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.title} placeholder='title' onChange={this.handleOnChangeTitle} />
          <input type="text" value={this.state.author} placeholder='author' onChange={this.handleOnChangeAuthor} />
          <input type="submit" value="Submit Book" />
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return{
    addBook : (book) => {
      console.log('BOOK',book)
      addBook(book)
      .then((book) => {
        console.log('BoOk', book)
        dispatch(book);
      })
    }
  }
}

const ConnectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBookForm);

export default ConnectedNewBookForm;