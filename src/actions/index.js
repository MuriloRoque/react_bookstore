import ACTIONTYPES from '../constants/ActionTypes'

export const createBook = book => ({
  type: ACTIONTYPES.CREATE_BOOK,
  book,
});

export const removeBook = (book, index) => ({
  type: ACTIONTYPES.REMOVE_BOOK,
  book,
});
