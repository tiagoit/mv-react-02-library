import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(ev) {
    ev.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ id: uuidv4(), title, category });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Type the title" onChange={this.handleChangeInput} value={title} />
        <select onChange={this.handleChangeSelect} value={category}>
          { categories.map(c => <option value={c} key={c}>{c}</option>) }
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BookForm;
