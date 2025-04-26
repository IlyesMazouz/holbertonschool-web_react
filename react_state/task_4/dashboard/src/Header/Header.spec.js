import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { newContext } from '../Context/context';

const mockContext = {
  user: {
    isLoggedIn: false,
    email: '',
    password: '',
  },
  logOut: jest.fn(),
};

const renderWithContext = (contextValue) => {
  return render(
    <newContext.Provider value={contextValue}>
      <Header />
    </newContext.Provider>
  );
};

describe('Header component', () => {
  test('renders logo and heading', () => {
    render(<Header />);
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  test('does not render logout section when user is not logged in', () => {
    renderWithContext(mockContext);
    expect(screen.queryByText(/Welcome/)).toBeNull(); 
  });

  test('renders logout section when user is logged in', () => {
    const contextWithUserLoggedIn = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
        password: 'password123',
      },
      logOut: jest.fn(),
    };

    renderWithContext(contextWithUserLoggedIn);
    expect(screen.getByText(/Welcome test@example.com/i)).toBeInTheDocument();
  });

  test('calls logOut function when clicking on logout link', () => {
    const contextWithUserLoggedIn = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
        password: 'password123',
      },
      logOut: jest.fn(),
    };

    renderWithContext(contextWithUserLoggedIn);

    const logoutLink = screen.getByText(/logout/i); 
    fireEvent.click(logoutLink);

    expect(contextWithUserLoggedIn.logOut).toHaveBeenCalled(); 
  });
});
