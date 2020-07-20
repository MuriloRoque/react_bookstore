import React from 'react';
import { render, screen } from '../test-utils';
import BooksList from '../../containers/BooksList';
import INITIAL_STATE from '../../constants/InitialState';

test('Renders the connected list with initialState', () => {
  render(<BooksList />, INITIAL_STATE);

  expect(screen.getByText(/Dune/i)).toBeInTheDocument();
});
