import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

test('renders LinkButton with caption', () => {
  render(<LinkButton caption="caption" />);
  
  const el1 = screen.getByText("caption");
  expect(el1).toBeInTheDocument();
});
