import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

global.alert = jest.fn();

describe('App component', () => {
  afterEach(cleanup);

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

  test('displays title "Course list" when logged in', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
  });

  test('displays title "Log in to continue" when not logged in', () => {
    render(<App />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders News from the School section with correct content', () => {
    render(<App />);
    expect(screen.getByText(/news from the school/i)).toBeInTheDocument();
    expect(screen.getByText(/holberton school news goes here/i)).toBeInTheDocument();
  });

  test('toggles notifications drawer when "Your notifications" button is clicked', () => {
    render(<App />);
    const notificationsButton = screen.getByText(/your notification/i);
    fireEvent.click(notificationsButton);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/Close/i)); 
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
  });

  afterEach(() => {
    global.alert.mockClear();
  });
});
