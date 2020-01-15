import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => {
  const { book, deleteBook } = props;
  const handleDeleteBook = () => {
    deleteBook(book);
  };

  return (
    <tr key={book.id} className="book-row">
      <td>
        { book.id.slice(0, 5) }
      </td>
      <td className="book-title">
        { book.title }
      </td>
      <td className="book-category">
        { book.category }
      </td>
      <td>
        <button className="btn-remove" onClick={handleDeleteBook} type="button">Delete</button>
      </td>
    </tr>
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
