import React from 'react';
import '../styles/BooksList.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, filterBook } from '../actions/index';
import filteredBooks from '../logic/filter';
import userImage from '../assets/images/user.png';

const BooksList = ({
  books, filter, removeBook, filterBook,
}) => (
  <div>
    <div className="main-container">
      <div className="nav-container d-flex">
        <div className="logo"> Bookstore CMS</div>
        <CategoryFilter handleFilterChange={filterBook} />
        <div className="image-container">
          <img src={userImage} alt="user" />
        </div>
      </div>
    </div>
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
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
