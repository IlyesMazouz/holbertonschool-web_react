import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  
  test('renders with blue color and default type', () => {
    const { getByText } = render(<NotificationItem id={1} type="default" value="New course available" />);
    const listItem = getByText(/New course available/i);
    expect(listItem).toHaveStyle('color: blue');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders with red color and urgent type', () => {
    const { getByText } = render(<NotificationItem id={2} type="urgent" value="New resume available" />);
    const listItem = getByText(/New resume available/i);
    expect(listItem).toHaveStyle('color: red');
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });

  test('calls markAsRead with correct id on click', () => {
    const markAsReadMock = jest.fn();
    const { getByText } = render(
      <NotificationItem id={42} type="default" value="Clickable notification" markAsRead={markAsReadMock} />
    );
    fireEvent.click(getByText(/clickable notification/i));
    expect(markAsReadMock).toHaveBeenCalledWith(42);
  });
});
