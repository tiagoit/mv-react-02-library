import React from 'react';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input placeholder="Type the title" />
      <select>
        { categories.map((category) => (
          <option value={category} key={category}>
            { category }
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
