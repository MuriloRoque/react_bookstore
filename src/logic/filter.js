const filteredBooks = (filter, books) => {
  if (filter !== null && filter !== 'All') {
    const filtered = books.filter(book => book.category === filter);
    return filtered;
  }
  return books;
};

export default filteredBooks;
