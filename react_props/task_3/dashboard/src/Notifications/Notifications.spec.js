import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  test('renders the notifications title', () => {
    render(<Notifications notifications={[]} />);
    const title = screen.getByText(/Here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: '<strong>Urgent notification</strong>',
      },
    ];
    render(<Notifications notifications={notifications} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
