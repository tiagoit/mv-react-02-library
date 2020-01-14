const booksReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...prevState, action.book];
    case 'REMOVE_BOOK':
      return prevState.filter((b) => b.id !== action.book.id);
    default:
      return prevState;
  }
};

export default booksReducer;
