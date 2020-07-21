import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants/Categories';
import '../styles/CategoryFilter.scss';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterChange = useCallback(event => {
    handleFilterChange(event.target.value);
  }, [handleFilterChange]);

  return (
    <div className="header">
      <label htmlFor="category" className="mt-2">
        BOOKS
        <select onChange={filterChange} className="delete-bgcolor ml-4">
          <option value="Categories" defaultValue>CATEGORIES</option>
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
