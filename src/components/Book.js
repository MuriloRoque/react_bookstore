import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => removeBook(id)}>Remove</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
