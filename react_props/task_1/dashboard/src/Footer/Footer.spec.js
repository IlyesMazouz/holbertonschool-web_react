import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders correct copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const expectedText = `Copyright ${year} - Holberton School`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
