import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror',
  'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSelect(event) {
    this.setState({
      category: event.target.value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input placeholder="Type the title" onChange={this.handleChangeInput} value={title} />
        <select onChange={this.handleChangeSelect} value={category}>
          { categories.map((c) => (
            <option value={c} key={c}>
              { c }
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

export default BookForm;
