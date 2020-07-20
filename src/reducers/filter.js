import { CHANGE_FILTER } from '../constants/ActionTypes';

const bookFilter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default bookFilter;
