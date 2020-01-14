import React from 'react';
import { PropTypes } from 'prop-types';


const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { changeFilter } = props;
  const handleFilterChange = (ev) => changeFilter(ev.target.value);
  return (
    <div>
      Filter
      <select onChange={handleFilterChange}>
        { categories.map(c => (
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
