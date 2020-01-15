const booksReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { ...prevState, books: [...prevState.books, action.book] };
    case 'REMOVE_BOOK':
      return { ...prevState, books: prevState.books.filter((b) => b.id !== action.book.id) };
    default:
      return prevState;
  }
};

export default booksReducer;
