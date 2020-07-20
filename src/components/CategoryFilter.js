import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/Categories';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterChange = (event) => {
    handleFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter:
        <select onChange={filterChange}>
          {
           CATEGORIES.map(category => (
             <option key={category} value={category}>{ category }</option>
           ))
            }
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;