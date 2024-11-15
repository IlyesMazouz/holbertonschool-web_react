import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render the Header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /Welcome to Holberton/i });
    expect(headerElement).toBeInTheDocument();
  });

  test('should render the Login component', () => {
    render(<App />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('should render the Footer component', () => {
    render(<App />);
    const footerText = screen.getByText(/Copyright 2024 - Holberton School/i);
    expect(footerText).toBeInTheDocument();
  });
});
