import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders footer with copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
