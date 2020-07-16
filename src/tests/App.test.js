import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders welcome to bookstore', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/to the bookstore/i);
  expect(welcomeElement).toBeInTheDocument();
});
