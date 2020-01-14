import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';
import './BooksList.css';

const BooksList = (props) => {
  const { books, deleteBook, changeFilter, category } = props;
  const handleDeleteBook = (book) => deleteBook(book);

  return (
    <div>
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
          { books.filter(b => (category === 'All' || b.category === category)).map((book) => (
            <Book
              book={book}
              key={book.id}
              deleteBook={handleDeleteBook}
            />
          ))}
        </tbody>
      </table>
      <CategoryFilter changeFilter={changeFilter} />
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
