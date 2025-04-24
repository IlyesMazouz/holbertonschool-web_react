import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

global.alert = jest.fn();

describe('App component', () => {
  test('renders Header component', () => {
    render(<App />);
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  test('renders Login component when not logged in', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  test('renders CourseList component when logged in', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
  });

  test('calls logOut function when Ctrl + H keys are pressed', () => {
    const logOutMock = jest.fn();
    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  test('shows alert with message "Logging you out" when Ctrl + H keys are pressed', () => {
    render(<App />);

    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

  afterEach(() => {
    global.alert.mockRestore();
  });
});
