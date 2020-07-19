import { v1 as uuidv1 } from 'uuid';
import { createBook, removeBook } from '../../actions/index';
import { CREATE_BOOK, REMOVE_BOOK } from '../../constants/ActionTypes';

describe('actions', () => {
  const id = uuidv1();
  test('should create an action to create a book', () => {
    const book = { title: 'Harry Potter', id, category: 'Action' };
    const expectedAction = {
      type: CREATE_BOOK,
      book,
    };
    expect(createBook(book)).toEqual(expectedAction);
  });

  test('should create an action to remove a book', () => {
    const expectedAction = {
      type: REMOVE_BOOK,
      id,
    };
    expect(removeBook(id)).toEqual(expectedAction);
  });
});
