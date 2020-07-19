import { v1 as uuidv1 } from 'uuid';
import books from '../../reducers/books';
import { CREATE_BOOK, REMOVE_BOOK } from '../../constants/ActionTypes';
import INITIAL_STATE from '../../constants/InitialState';

describe('books reducer', () => {
  const id = uuidv1();
  test('should return the initial state', () => {
    expect(books(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('should handle CREATE_BOOK', () => {
    expect(
      books([], {
        type: CREATE_BOOK,
        book: { id, title: 'Test book', category: 'Action' },
      }),
    ).toEqual([
      { id, title: 'Test book', category: 'Action' },
    ]);

    expect(
      books(
        INITIAL_STATE,
        {
          type: CREATE_BOOK,
          book: { id, title: 'Test book', category: 'Action' },
        },
      ),
    ).toEqual([
      ...INITIAL_STATE, { id, title: 'Test book', category: 'Action' },
    ]);
  });

  test('should handle REMOVE_BOOK', () => {
    expect(
      books([{ id, title: 'Test book', category: 'Action' }], {
        type: REMOVE_BOOK,
        id,
      }),
    ).toEqual([]);

    expect(
      books([
        ...INITIAL_STATE, { id, title: 'Test book', category: 'Action' }],
      {
        type: REMOVE_BOOK,
        id,
      }),
    ).toEqual([
      ...INITIAL_STATE,
    ]);
  });
});
