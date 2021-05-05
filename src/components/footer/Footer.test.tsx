import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import * as mocks from './Footer.mocks';

test('renders Footer', () => {
  render(<Footer />);
  
  const el1 = screen.getByText("Shortly");
  expect(el1).toBeInTheDocument();
});

test('renders menus', () => {
    render(<Footer />);
    
    mocks.menusMocks.map(menu => {
        const el = screen.getByText(menu.name);
        expect(el).toBeInTheDocument();
    })
});

test('renders links', () => {
    render(<Footer />);
    
    mocks.menusMocks.map(menu => {
        menu.links.map(link => {
            const el = screen.getByText(link.name);
            expect(el).toBeInTheDocument();
        })
    })
});

test('renders social media links', () => {
    render(<Footer />);
    
    mocks.socialMediaMocks.map(socialMediaPlatforms => {
            const el = screen.getByTitle(socialMediaPlatforms.name);
            expect(el).toBeInTheDocument();
    })
});