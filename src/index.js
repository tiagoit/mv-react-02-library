import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: uuidv4().replace('-', '').slice(0, 10),
      title: 'Game of Thrones',
      category: 'Learning',
    }, {
      id: uuidv4().replace('-', '').slice(0, 10),
      title: 'Ruby on Rails - The Complete Guide',
      category: 'Learning',
    }, {
      id: uuidv4().replace('-', '').slice(0, 10),
      title: 'Harry Potter',
      category: 'kids',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
