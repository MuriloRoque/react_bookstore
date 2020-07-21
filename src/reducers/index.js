import { combineReducers } from 'redux';
import books from './books';
import bookFilter from './filter';

export default combineReducers({
  books,
  filter: bookFilter,
});
