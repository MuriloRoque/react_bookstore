import React from 'react';
import { render, screen } from '../test-utils';
import BooksForm from '../../containers/BooksForm';
import INITIAL_STATE from '../../constants/InitialState';

describe('Form connect', () => {
  test('Renders the connected form correctly', () => {
    render(<BooksForm />, INITIAL_STATE);

    expect(screen.getByText(/Please, select the book title:/i)).toBeInTheDocument();
  });
});
