import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the School dashboard header', () => {
    render(<App />);
    const headerElement = screen.getByText(/School dashboard/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the Login prompt', () => {
    render(<App />);
    const loginText = screen.getByText(/Login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('renders an email input field', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/Email:/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders a password input field', () => {
    render(<App />);
    const passwordInput = screen.getByLabelText(/Password:/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders an OK button', () => {
    render(<App />);
    const okButton = screen.getByText(/OK/i);
    expect(okButton).toBeInTheDocument();
  });
});
