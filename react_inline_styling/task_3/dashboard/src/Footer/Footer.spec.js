import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders correct copyright', () => {
    render(<Footer />);
    const expectedText = getFooterCopy(true);
    expect(screen.getByText((text) => text.includes(expectedText))).toBeInTheDocument();
  });
});
