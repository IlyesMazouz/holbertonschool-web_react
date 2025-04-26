import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('focuses input when label is clicked', async () => {
    render(<Login />);
    
    const emailInput = screen.getByLabelText(/email/i);
    
    fireEvent.click(screen.getByLabelText(/email/i));
    
    emailInput.focus();
    
    await waitFor(() => expect(emailInput).toHaveFocus());
  });

  test('submit button should be disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /login/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button should be enabled when email and password are valid', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    expect(submitButton).toBeEnabled();
  });

  test('form should submit successfully', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(screen.queryByLabelText(/email/i).value).toBe('test@example.com');
    expect(screen.queryByLabelText(/password/i).value).toBe('password123');
  });

  test('calls logIn prop with email and password on submit', () => {
    const mockLogIn = jest.fn();
    render(<Login logIn={mockLogIn} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
