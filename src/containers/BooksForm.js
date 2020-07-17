import React from 'react';
import CATEGORIES from '../constants/Categories';

const BooksForm = () => (
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

export default BooksForm;
