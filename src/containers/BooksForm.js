import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import CATEGORIES from '../constants/Categories';
import '../styles/BooksForm.scss';

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
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="form-container">
        <div className="form-title">ADD NEW BOOK</div>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col-md-7 bg-white">
            <input type="text" placeholder="Book title" name="title" id="title" value={title} onChange={this.handleChange} className="w-100" />
          </div>
          <div className="col-md-3">
            <select id="category" className="w-100 h-full" onChange={this.handleChange} name="category">
              {
                  CATEGORIES.map(category => (
                    <option key={category} value={category}>{ category }</option>
                  ))
                }
            </select>
          </div>
          <div className="col-md-2">
            <button value="submit" className="btn btn-primary full-render" type="submit"> ADD BOOK </button>
          </div>
        </form>
      </div>
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
