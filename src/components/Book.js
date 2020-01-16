import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => {
  const { book, deleteBook } = props;
  const handleDeleteBook = () => {
    deleteBook(book);
  };

  return (
    <div key={book.id} className="book-row">
      <div className="book-category">{ book.category }</div>
      <div className="book-title">{ book.title }</div>
      <div>
        <button className="btn-remove" onClick={handleDeleteBook} type="button">Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
