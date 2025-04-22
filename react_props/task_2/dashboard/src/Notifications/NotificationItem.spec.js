import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  test('renders with blue color and default type', () => {
    render(<NotificationItem type="default" value="New course available" />);
    const listItem = screen.getByText(/New course available/i);
    expect(listItem).toHaveStyle('color: blue');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders with red color and urgent type', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const listItem = screen.getByText(/New resume available/i);
    expect(listItem).toHaveStyle('color: red');
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });
});
