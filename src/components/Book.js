import React from 'react';
import '../styles/Book.scss';
import PropTypes from 'prop-types';

function Book(props) {
  return (
      <tr>
        <tr>
          <td>{props.book.id}</td>
          <td>{props.book.title}</td>
          <td>{props.book.category}</td>
        </tr>
      </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Book;
