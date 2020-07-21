import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/Categories';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);

  return (
    <div>
      <label htmlFor="category">
        Filter:
        <select onChange={filterChange}>
          {
           ['All'].concat(CATEGORIES).map(category => (
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
