import React from 'react';
import { render, screen } from '@testing-library/react';
import Boost from './Boost';

test('renders Boost', () => {
  render(<Boost />);
  
  const el1 = screen.getByText("Boost your links today");
  expect(el1).toBeInTheDocument();

  const el2 = screen.getByText("Get Started");
  expect(el2).toBeInTheDocument();
});
