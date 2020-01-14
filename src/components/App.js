import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

const mapStateToProps = (state) => ({ books: state.books });
const BooksListContainer = connect(mapStateToProps, null)(BooksList);

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);

const App = () => (
  <div>
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
