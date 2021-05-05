import React from 'react';
import { render, screen } from '@testing-library/react';
import UrlItem from './UrlItem';

const url = {
  original_link: 'http://original_link',
  short_link: 'http://short_link'
}

test('renders UrlItem with url', () => {

  render(<UrlItem 
    originalLink={url.original_link}
    shortLink={url.short_link}
  />);
  
  const original_link = screen.getByText(url.original_link);
  expect(original_link).toBeInTheDocument();

  const short_link = screen.getByText(url.short_link);
  expect(short_link).toBeInTheDocument();
});