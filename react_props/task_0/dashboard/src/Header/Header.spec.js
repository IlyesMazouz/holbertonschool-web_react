import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders logo and heading', () => {
    render(<Header />);
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });
});
