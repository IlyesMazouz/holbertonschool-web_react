import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Notifications from './Notifications';

afterEach(cleanup);

const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
];

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

  test('closes the drawer when the close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} notifications={mockNotifications} handleHideDrawer={handleHideDrawer} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test('calls handleDisplayDrawer when the menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });
});
