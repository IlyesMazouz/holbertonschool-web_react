import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox'); 
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length + (passwordInput ? 1 : 0)).toBe(2);
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
