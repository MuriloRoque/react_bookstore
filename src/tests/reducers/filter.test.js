import bookFilter from '../../reducers/filter';
import { CHANGE_FILTER } from '../../constants/ActionTypes';

describe('filter reducer', () => {
  test('should return the initial state', () => {
    expect(bookFilter(undefined, {})).toEqual(null);
  });

  test('should handle CHANGE_FILTER', () => {
    expect(
      bookFilter(null, {
        type: CHANGE_FILTER,
        category: 'Action',
      }),
    ).toEqual('Action');
  });
});
