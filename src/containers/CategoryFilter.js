import React from 'react';
import { PropTypes } from 'prop-types';
import categories from '../constants/categories';
import './CategoryFilter.scss';

const CategoryFilter = (props) => {
  const cat = ['All', ...categories];
  const { changeFilter } = props;
  const handleFilterChange = (ev) => changeFilter(ev.target.value);
  return (
    <div className="container-filter">
      Filter
      <select onChange={handleFilterChange}>
        { cat.map(c => (
          <option value={c} key={c}>
            {c}
          </option>
        )) }
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
