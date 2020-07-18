import React from 'react';
import '../styles/App.scss';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
