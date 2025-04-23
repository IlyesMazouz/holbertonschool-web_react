import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  test('always renders the "Your notifications" title', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does not render notifications section when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.queryByRole('listitem')).toBeNull();
  });

  test('renders notifications section when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('renders "No new notification for now" when notifications is empty and displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });
});
