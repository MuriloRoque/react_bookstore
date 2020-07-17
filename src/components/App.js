import React from 'react';
import '../styles/App.scss';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
