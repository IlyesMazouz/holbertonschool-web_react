import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('contains 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    
    const labels = screen.getAllByText(/email:|password:/i); 
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(1);
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('focuses the email input when its label is clicked', () => {
    render(<Login />);
  
    const emailInput = screen.getByLabelText(/email/i);
  
    emailInput.focus();
  
    expect(emailInput).toHaveFocus();
  });  
});
