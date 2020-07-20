import bookFilter from '../../reducers/filter';
import { CHANGE_FILTER } from '../../constants/ActionTypes';
import { FILTER_STATE } from '../../constants/InitialState';

describe('filter reducer', () => {
  test('should return the initial state', () => {
    expect(bookFilter(undefined, {})).toEqual(FILTER_STATE);
  });

  test('should handle CHANGE_FILTER', () => {
    expect(
      bookFilter(FILTER_STATE, {
        type: CHANGE_FILTER,
        category: 'Action',
      }),
    ).toEqual('Action');
  });
});
