import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import * as utils from '../utils/utils';

describe('Footer component', () => {
  test('renders correct copyright when getFooterCopy is called with isIndex = true', () => {
    jest.spyOn(utils, 'getFooterCopy').mockReturnValue('Holberton School');
    
    render(<Footer />);

    const year = new Date().getFullYear();
    const expectedText = `Copyright ${year} - Holberton School`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
