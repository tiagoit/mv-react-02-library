import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
