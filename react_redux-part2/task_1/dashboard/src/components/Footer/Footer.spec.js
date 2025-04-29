import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Footer component', () => {
  test('renders correct copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const expectedText = `Copyright ${currentYear} - Holberton School`;
    expect(screen.getByText((text) => text.includes(expectedText))).toBeInTheDocument();
  });

  test('does not display "Contact us" link when user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    render(
      <newContext.Provider value={contextValue}>
        <Footer />
      </newContext.Provider>
    );
    const contactLink = screen.queryByText('Contact us');
    expect(contactLink).not.toBeInTheDocument();
  });

  test('displays "Contact us" link when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    render(
      <newContext.Provider value={contextValue}>
        <Footer />
      </newContext.Provider>
    );
    const contactLink = screen.getByText('Contact us');
    expect(contactLink).toBeInTheDocument();
  });

  test('displays "Contact us" link when isLoggedIn is true in Redux store', () => {
    const store = mockStore({
      auth: { isLoggedIn: true },
    });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const contactLink = screen.getByText('Contact us');
    expect(contactLink).toBeInTheDocument();
  });

  test('does not display "Contact us" link when isLoggedIn is false in Redux store', () => {
    const store = mockStore({
      auth: { isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const contactLink = screen.queryByText('Contact us');
    expect(contactLink).not.toBeInTheDocument();
  });
});
