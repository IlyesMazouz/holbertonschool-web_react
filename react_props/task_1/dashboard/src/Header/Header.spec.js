import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should contain the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('should contain the correct heading h1 element', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /Welcome to Holberton/i });
    expect(heading).toBeInTheDocument();
  });
});
