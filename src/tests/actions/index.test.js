import {createBook, removeBook} from '../../actions/index';
import ACTIONTYPES from '../../constants/ActionTypes';

describe('actions', () => {
  test('should create an action to create a book', () => {
    const book = 'Harry Potter'
    const expectedAction = {
      type: ACTIONTYPES.CREATE_BOOK,
      book
    }
    expect(createBook(book)).toEqual(expectedAction)
  })

  test('should create an action to remove a book', () => {
    const book = 'Harry Potter'
    const expectedAction = {
      type: ACTIONTYPES.REMOVE_BOOK,
      book
    }
    expect(removeBook(book)).toEqual(expectedAction)
  })
})