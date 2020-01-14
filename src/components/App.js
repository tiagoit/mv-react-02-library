import React from 'react';
import { PropTypes } from 'prop-types';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { books } = this.props;
    this.books = books;
  }

  render() {
    return (
      <div>
        <BooksList books={this.books} />
        <BooksForm />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
