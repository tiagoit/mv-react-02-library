import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';
import './BooksList.scss';

const BooksList = (props) => {
  const { books, deleteBook, changeFilter, category } = props;
  const handleDeleteBook = (book) => deleteBook(book);

  return (
    <div className="container-BooksList">
      <CategoryFilter changeFilter={changeFilter} />
      <div className="container-table">
        { books.filter(b => (category === 'All' || b.category === category)).map((book) => (
          <Book
            book={book}
            key={book.id}
            deleteBook={handleDeleteBook}
          />
        ))}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  deleteBook: PropTypes.func,
  changeFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
  deleteBook: null,
};

export default BooksList;
