const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const deleteBook = (book) => ({
  type: 'DELETE_BOOK',
  book,
});

exports = {
  createBook,
  deleteBook,
};
