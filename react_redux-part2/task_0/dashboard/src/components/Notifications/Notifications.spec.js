import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Notifications from './Notifications';
import * as notificationsSlice from '../../features/notifications/notificationsSlice';

const mockStore = configureStore([thunk]);

const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
];

jest.mock('../../features/notifications/notificationsSlice', () => ({
  fetchNotifications: jest.fn(() => () => Promise.resolve()),
  markNotificationAsRead: jest.fn((id) => ({ type: 'notifications/markAsRead', payload: id })),
}));

afterEach(cleanup);

describe('Notifications Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: {
        notifications: mockNotifications,
      },
    });
  });

  test('always renders the "Your notifications" menu item', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does not show drawer initially', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
  });

  test('shows drawer after clicking menu item', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('hides drawer when close button is clicked', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByText(/your notifications/i));
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
  });

  test('displays "No new notifications for now" when there are no notifications', () => {
    const emptyStore = mockStore({
      notifications: { notifications: [] },
    });

    render(
      <Provider store={emptyStore}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText(/no new notifications for now/i)).toBeInTheDocument();
  });

  test('clicking a notification dispatches markAsRead with correct ID', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    fireEvent.click(screen.getByText(/your notifications/i));
    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[0]);
    expect(notificationsSlice.markNotificationAsRead).toHaveBeenCalledWith(1);
  });

  test('fetchNotifications is called on mount', () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(notificationsSlice.fetchNotifications).toHaveBeenCalled();
  });
});
