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
});
