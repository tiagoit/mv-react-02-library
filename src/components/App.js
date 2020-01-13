import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
