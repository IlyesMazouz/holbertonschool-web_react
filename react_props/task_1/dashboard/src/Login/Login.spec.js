import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByLabelText(/email|password/i);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });

    expect(labels.length).toBe(2);
    expect(inputs.length + (passwordInput ? 1 : 0)).toBe(2);
    expect(button).toBeInTheDocument();
  });

  test('focuses the input when the corresponding label is clicked', async () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByRole('textbox');

    await userEvent.click(screen.getByText(/email/i));
    expect(emailInput).toHaveFocus();
  });
});
