import React from 'react';
import '../styles/Book.scss';
import PropTypes from 'prop-types';

function Book(props) {
  const { id, title, category } = props.book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Book;
