import ACTIONTYPES from '../constants/ActionTypes';

export const createBook = book => ({
  type: ACTIONTYPES.CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: ACTIONTYPES.REMOVE_BOOK,
  book,
});
