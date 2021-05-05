import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders Menu', () => {
  render(<Menu />);
  
  const el1 = screen.getByText("Features");
  expect(el1).toBeInTheDocument();

  const el2 = screen.getByText("Resources");
  expect(el2).toBeInTheDocument();

  const el3 = screen.getByText("Pricing");
  expect(el3).toBeInTheDocument();

  const el4 = screen.getByText("Log in");
  expect(el4).toBeInTheDocument();

  const el5 = screen.getByText("Sign Up");
  expect(el5).toBeInTheDocument();
});
