const initialState = [];

const books = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_BOOK':
      return [ ...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category
        }
      ]

    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];

    default:
      return state;
  }
}

export default books;
