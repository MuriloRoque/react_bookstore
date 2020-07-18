const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];

    case 'REMOVE_BOOK':
      return state.filter(book => book.bookid !== action.book);;

    default:
      return state;
  }
};

export default books;
