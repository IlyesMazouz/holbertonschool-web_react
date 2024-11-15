import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('should render the correct copyright text when getFooterCopy is true', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/Copyright 2024 - Holberton School/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
