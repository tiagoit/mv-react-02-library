import React from 'react';


const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      Filter
      <select>
        { categories.map(c => <option value={c} key={c}>{c}</option>) }
      </select>
    </div>
  );
};

export default CategoryFilter;
