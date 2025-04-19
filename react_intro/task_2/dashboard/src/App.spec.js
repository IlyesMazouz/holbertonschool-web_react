import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the heading "School dashboard"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct text in the body and footer', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright/i);
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
