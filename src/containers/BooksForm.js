import React from 'react';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" value="" name="title" />
      <select value="" name="category">
        {
          CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))
        }
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
