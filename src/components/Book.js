import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, deleteBook } = props;
  const handleDeleteBook = () => {
    deleteBook(book);
  };
  return (
    <tr key={book.id}>
      <td>
        { book.id.slice(0, 5) }
      </td>
      <td>
        { book.title }
      </td>
      <td>
        { book.category }
      </td>
      <td>
        <button onClick={handleDeleteBook} type="button">Delete</button>
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
