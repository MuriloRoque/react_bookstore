import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import INITIAL_STATE from './constants/InitialState';
import 'bootstrap/dist/css/bootstrap.css';

const STATE = { books: INITIAL_STATE };

const store = createStore(rootReducer, STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
