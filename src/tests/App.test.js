import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders welcome to calculator', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/to the calculator/i);
  expect(welcomeElement).toBeInTheDocument();
});
