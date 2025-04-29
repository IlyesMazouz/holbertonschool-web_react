import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Header component', () => {
  test('renders logo and heading', () => {
    renderWithContext({
      user: {
        isLoggedIn: false,
        email: '',
        password: '',
      },
      logOut: jest.fn(),
    });
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  test('does not render logout section when user is not logged in', () => {
    renderWithContext({
      user: {
        isLoggedIn: false,
        email: '',
        password: '',
      },
      logOut: jest.fn(),
    });
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
    const logOutMock = jest.fn();
    const contextWithUserLoggedIn = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
        password: 'password123',
      },
      logOut: logOutMock,
    };

    renderWithContext(contextWithUserLoggedIn);

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    expect(logOutMock).toHaveBeenCalled();
  });

  test('displays logout link when user is logged in via Redux store', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, email: 'test@example.com' },
    });

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logoutLink = screen.getByText(/logout/i);
    expect(logoutLink).toBeInTheDocument();
  });

  test('displays welcome message with email when logged in via Redux store', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, email: 'test@example.com' },
    });

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText(/Welcome test@example.com/i)).toBeInTheDocument();
  });

  test('dispatches logOut action when logout is clicked (Redux)', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, email: 'test@example.com' },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    expect(store.dispatch).toHaveBeenCalledWith(logOut());
  });
});
