import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders the list of notifications', () => {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    render(<Notifications notifications={notificationsList} />);

    expect(screen.getByText(/New course available/i)).toBeInTheDocument();
    expect(screen.getByText(/New resume available/i)).toBeInTheDocument();
    expect(screen.getByText(/Urgent requirement/i)).toBeInTheDocument();
  });
});
