import React from 'react';
import '../styles/BooksList.scss';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Book from "../components/Book";

function BooksList(props) {
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {
        props.books.map((book, index) => {
          return (
            <Book key={index} book={book} />
          )
        })
      }
    </table>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired  
}

export default connect(mapStateToProps, null)(BooksList)
