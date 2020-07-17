import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

let initialState = {
  books:[
    {id: Math.round(100 * Math.random()), title: "Life of Action", category: 'Action'},
    {id: Math.round(150 * Math.random()), title: 'Becoming', category: 'Biography'},
    {id: Math.round(200 * Math.random()), title: 'Sapiens: A Brief History of Humankind', category: 'History'},
    {id: Math.round(250 * Math.random()), title: 'Dracula', category: 'Horror'},
    {id: Math.round(300 * Math.random()), title: 'The Very Hungry Caterpillar', category: 'Kids'},
    {id: Math.round(350 * Math.random()), title: 'Microverse', category: 'Learning'},
    {id: Math.round(400 * Math.random()), title: 'Dune', category: 'Sci-Fi'}
  ]
}

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);

serviceWorker.register();
