import { CREATE_BOOK, REMOVE_BOOK } from '../constants/ActionTypes';
import INITIAL_STATE from '../constants/InitialState';

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};

export default books;
