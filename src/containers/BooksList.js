import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import './BooksList.css';

const BooksList = (props) => {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => <Book book={book} />)}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
