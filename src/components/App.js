import React from 'react';
import { connect } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import { createBook } from '../actions/index';
import './App.css';

const mapStateToProps = (state) => ({ books: state.books });
const BooksListContainer = connect(mapStateToProps, null)(BooksList);

const mapDispatchToProps = (dispatch) => (
  {
    addBook: (book) => dispatch(createBook(book)),
  }
);
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);

const App = () => (
  <div>
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
