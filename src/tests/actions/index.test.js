import { createBook, removeBook } from '../../actions/index';
import { CREATE_BOOK, REMOVE_BOOK } from '../../constants/ActionTypes';

describe('actions', () => {
  test('should create an action to create a book', () => {
    const book = 'Harry Potter';
    const expectedAction = {
      type: CREATE_BOOK,
      book,
    };
    expect(createBook(book)).toEqual(expectedAction);
  });

  test('should create an action to remove a book', () => {
    const book = 'Harry Potter';
    const expectedAction = {
      type: REMOVE_BOOK,
      book: book.id,
    };
    expect(removeBook(book)).toEqual(expectedAction);
  });
});
