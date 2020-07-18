import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import initialState from './constants/InitialState';

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
