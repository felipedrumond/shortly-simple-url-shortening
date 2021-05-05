import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About', () => {
  render(<About />);
  
  const element = screen.getByText("Advanced Statistics");
  expect(element).toBeInTheDocument();
});

test('renders features', () => {
    render(<About />);
    
    const el1 = screen.getByText("Brand Recognition");
    expect(el1).toBeInTheDocument();

    const el2 = screen.getByText("Detailed Records");
    expect(el2).toBeInTheDocument();

    const el3 = screen.getByText("Fully Customizable");
    expect(el3).toBeInTheDocument();
  });
