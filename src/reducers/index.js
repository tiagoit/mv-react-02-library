import { ReactReduxContext } from 'react-redux';
import booksReducer from './books';

const rootReducer = ReactReduxContext.combineReducers({
  books: booksReducer,
});

export default rootReducer;
