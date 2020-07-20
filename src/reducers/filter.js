import { CHANGE_FILTER } from '../constants/ActionTypes';
import { FILTER_STATE } from '../constants/InitialState';

const bookFilter = (state = FILTER_STATE, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default bookFilter;