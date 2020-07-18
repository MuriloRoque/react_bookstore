import books from '../../reducers/books'
import {CREATE_BOOK, REMOVE_BOOK} from '../../constants/ActionTypes'
import INITIAL_STATE from '../../constants/InitialState'
import { v1 as uuidv1 } from 'uuid';

describe('books reducer', () => {
  test('should return the initial state', () => {
    expect(books(undefined, {})).toEqual(INITIAL_STATE)
  })

  test('should handle CREATE_BOOK', () => {
    const id = uuidv1()
    expect(
      books([], {
        type: CREATE_BOOK,
        book: {id: id, title: 'Test book', category: 'Action' }
      })
    ).toEqual([
      {id: id, title: 'Test book', category: 'Action' }
    ])

    expect(
      books(
        [
          {id: id, title: 'Test book', category: 'Action' }
        ],
        {
          type: CREATE_BOOK,
          book: {id: id, title: 'Test book', category: 'Action' }
        }
      )
    ).toEqual([
      ...INITIAL_STATE, {id: id, title: 'Test book', category: 'Action' }, 
    ])
  })
})