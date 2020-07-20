import React from 'react';
import '../styles/BooksList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
          books.map(book => (
            <Book
              key={book.id}
              title={book.title}
              category={book.category}
              id={book.id}
              removeBook={removeBook}
            />
          ))
        }
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
