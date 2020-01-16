export const createBook = (book) => ({ type: 'CREATE_BOOK', book });
export const deleteBook = (book) => ({ type: 'DELETE_BOOK', book });
export const filterBook = (filter) => ({ type: 'CHANGE_FILTER', filter });
