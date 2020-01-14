import React from 'react';
import { connect } from 'react-redux';
import { createBook, deleteBook } from '../actions/index';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

const mapStateToProps = (state) => ({ books: state.books });
const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => dispatch(deleteBook(book)),
});

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BooksList);

const mapDispatchToPropsForm = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
const BooksFormContainer = connect(null, mapDispatchToPropsForm)(BooksForm);

const App = () => (
  <div>
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
