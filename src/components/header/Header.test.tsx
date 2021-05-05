import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
  render(<Header />);
  
  const el1 = screen.getByText("More than just shorter links");
  expect(el1).toBeInTheDocument();

  const el2 = screen.getByText(/Build your brand's recognition/i);
  expect(el2).toBeInTheDocument();
});
