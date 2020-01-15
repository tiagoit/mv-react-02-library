import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import categories from '../constants/categories';
import './BooksForm.css';

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
      <div className="container-BooksForm">
        <h3 className="form-title">
          Add New Book
        </h3>
        <form onSubmit={this.handleSubmit}>
          <input className="input-title" placeholder="Type the title" onChange={this.handleChangeInput} value={title} />
          <select className="input-category" onChange={this.handleChangeSelect} value={category}>
            { categories.map(c => <option value={c} key={c}>{c}</option>) }
          </select>
          <button className="btn-add" type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BookForm;
