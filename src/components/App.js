import React from 'react';
import { connect } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

const mapStateToProps = (state) => ({ books: state.books });
const BooksListContainer = connect(mapStateToProps, null)(BooksList);

const App = () => (
  <div>
    <BooksListContainer />
    <BooksForm />
  </div>
);

export default App;
