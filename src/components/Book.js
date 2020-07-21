import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.scss';

const Book = ({
  id, title, category, removeBook,
}) => (
  <div className="book-container">
    <div className="col-md-5">
      <div className="book-category">{ category }</div>
      <div className="book-title">{ title }</div>
      <div className="action-container">
        <button type="button" className="disable-btn-border btn-padding-right btnlink"> Comment</button>
        <button type="button" className="disable-btn-border btn-padding-right btn-padding-left btnlink" id={id} onClick={() => removeBook(id)}> Remove</button>
        <button type="button" className="btnlink btn-padding-left disable-btn-border-none"> Edit</button>
      </div>
    </div>
    <div className="col-md-4 ">
      <div className="radialProgressBar progress-10 float-left">
        <div className="overlay" />
      </div>
      <div className="completed">
        <p> 10% </p>
        <span> Completed</span>
      </div>
    </div>
    <div className="col-md-3">
      <p className="m-0 color-12121">CURRENT CHAPTER</p>
      <strong className="chapter"> Chapter 10</strong>
      <button type="button" className="btn btn-primary mt-4 d-block">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
