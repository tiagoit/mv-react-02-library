import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import './BookList.css';

const BookList = (props) => {
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

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
