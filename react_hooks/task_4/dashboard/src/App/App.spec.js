import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

global.alert = jest.fn();
console.log = jest.fn();

describe('App component', () => {
  afterEach(() => {
    cleanup();
    global.alert.mockClear();
    console.log.mockClear();
  });

  test('renders Login component when not logged in', () => {
    render(<App />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders CourseList component when logged in', () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const loginButton = screen.getByText(/log in to continue/i);
    fireEvent.click(loginButton);

    expect(screen.getByText(/course list/i)).toBeInTheDocument();
  });

  test('calls logOut function and shows alert when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();

    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const loginButton = screen.getByText(/log in to continue/i);
    fireEvent.click(loginButton);

    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

  test('clicking a notification item removes it and logs the correct message', () => {
    render(<App />);

    const notificationButton = screen.getByText(/your notification/i);
    fireEvent.click(notificationButton);

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBeGreaterThan(0);

    fireEvent.click(notificationItems[0]);

    const updatedNotificationItems = screen.queryAllByRole('listitem');
    expect(updatedNotificationItems.length).toBe(notificationItems.length - 1);

    expect(console.log).toHaveBeenCalledWith(
      `Notification ${notificationItems[0].getAttribute('data-id')} has been marked as read`
    );
  });
});
