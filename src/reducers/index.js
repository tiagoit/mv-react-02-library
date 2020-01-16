import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: booksReducer,
  category: filterReducer,
});

export default rootReducer;
