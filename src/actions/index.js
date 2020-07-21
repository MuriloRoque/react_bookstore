import { REMOVE_BOOK, CREATE_BOOK, CHANGE_FILTER } from '../constants/ActionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export const filterBook = category => ({
  type: CHANGE_FILTER,
  category,
});
