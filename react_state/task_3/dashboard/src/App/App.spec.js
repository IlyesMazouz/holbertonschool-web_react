import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

global.alert = jest.fn();

describe('App component', () => {
  afterEach(() => {
    cleanup();
    global.alert.mockClear();
  });

  test('renders Login component when not logged in', () => {
    render(<App />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders CourseList component when logged in', () => {
    render(<App />);
    
    const loginButton = screen.getByText(/log in to continue/i);
    fireEvent.click(loginButton);
    
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
  });

  test('calls logOut function and shows alert when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();

    render(<App />);
    
    const loginButton = screen.getByText(/log in to continue/i);
    fireEvent.click(loginButton);
    
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });
    
    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Logging you out'); 
  });
});
