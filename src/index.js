import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';
import ReactRedux from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = [
  {
    id: uuidv4(),
    title: 'Game of Thrones',
    category: 'Learning',
  }, {
    id: uuidv4(),
    title: 'Ruby on Rails - The Complete Guide',
    category: 'Learning',
  }, {
    id: uuidv4(),
    title: 'Harry Potter',
    category: 'kids',
  },
];

const store = React.createStore(rootReducer, initialState);
const { Provider } = ReactRedux;

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
