import React from 'react';
import '../styles/BooksList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBook } from '../actions/index';
import filteredBooks from '../logic/filter';

const BooksList = ({
  books, filter, removeBook, filterBook,
}) => (
  <div>
    <CategoryFilter handleFilterChange={filterBook} />
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
            filteredBooks(filter, books).map(book => (
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
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  filterBook: category => dispatch(filterBook(category)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
  filterBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  filter: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
