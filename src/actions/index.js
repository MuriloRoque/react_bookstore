export const createBook = book => {
  return {
    type: 'CREATE_BOOK',
    book
  }
}

export const removeBook = (book, index) => {
  return {
    type: 'REMOVE_BOOK',
    book,
    index
  }
}
