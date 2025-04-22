import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 input elements', () => {
    render(<Login />);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length + (passwordInput ? 1 : 0)).toBe(2);
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with text OK', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
