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
  test('always renders the "Your notifications" menu item', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does not display notifications drawer when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('displays notifications drawer when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('displays "No new notification for now" when notifications list is empty', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });

  test('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} notifications={mockNotifications} handleHideDrawer={handleHideDrawer} />);
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking a notification calls markAsRead with correct ID', () => {
    const markNotificationAsRead = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        notifications={mockNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
    const notificationItems = screen.getAllByRole('listitem');
    fireEvent.click(notificationItems[0]);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
