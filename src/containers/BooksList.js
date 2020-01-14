import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import './BooksList.css';

const BooksList = (props) => {
  const { books, deleteBook } = props;
  const handleDeleteBook = (book) => deleteBook(book);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => (
          <Book
            book={book}
            key={book.id}
            deleteBook={handleDeleteBook}
          />
        ))}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  deleteBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  deleteBook: null,
};

export default BooksList;