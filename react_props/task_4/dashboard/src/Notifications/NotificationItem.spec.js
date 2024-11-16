import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders with blue color and default type', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const liElement = screen.getByText(/Test notification/i);

    expect(liElement).toHaveStyle('color: blue');
    expect(liElement).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders with red color and urgent type', () => {
    render(<NotificationItem type="urgent" value="Urgent notification" />);
    const liElement = screen.getByText(/Urgent notification/i);

    expect(liElement).toHaveStyle('color: red');
    expect(liElement).toHaveAttribute('data-notification-type', 'urgent');
  });
});
