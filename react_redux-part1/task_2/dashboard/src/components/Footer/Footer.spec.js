import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';

describe('Footer component', () => {
  test('renders correct copyright', () => {
    render(<Footer />);
    const expectedText = getFooterCopy(true);
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
});
