import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import CATEGORIES from '../constants/Categories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: uuidv1(),
      title,
      category,
    };

    if (title && category) {
      createBook(book);
      this.setState({ title: '' });
      this.title.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="title" htmlFor="title">
          Please, select the book title:
          <input type="text" name="title" id="title" ref={title => { this.title = title; }} onChange={this.handleChange} />
        </label>
        <label name="category" htmlFor="category">
          Please, select a category:
          <select id="category" onChange={this.handleChange} name="category">
            <option value="">Select a category</option>
            {
                CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))
              }
          </select>
        </label>
        <button value="submit" type="submit">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
