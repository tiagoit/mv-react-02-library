import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import categories from '../constants/categories';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ id: uuidv4(), title, category });
    this.setState({
      title: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Type the title" onChange={this.handleChange} value={title} name="title" />
        <select onChange={this.handleChange} value={category} name="category">
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
