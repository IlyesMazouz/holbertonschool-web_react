import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('should contain 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByText(/Email|Password/i);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: /Login/i });

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test('should focus input when label is clicked', () => {
    render(<Login />);
    const emailLabel = screen.getByLabelText(/Email/i);
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
