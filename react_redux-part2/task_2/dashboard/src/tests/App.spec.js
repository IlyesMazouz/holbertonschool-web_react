import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

global.alert = jest.fn();
console.log = jest.fn();

const mockStore = configureStore([]);
const mockAxios = new MockAdapter(axios);

describe('App component', () => {
  afterEach(() => {
    cleanup();
    global.alert.mockClear();
    console.log.mockClear();
    mockAxios.reset();
  });

  test('renders Login component when not logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders CourseList component when logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: true },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/course list/i)).toBeInTheDocument();
  });

  test('mocks fetchNotifications API and checks that notifications are displayed on mount', async () => {
    const notificationsMockData = [
      { id: 1, text: 'New Notification 1' },
      { id: 2, text: 'New Notification 2' },
    ];

    mockAxios.onGet('/path/to/notifications.json').reply(200, notificationsMockData);

    const store = mockStore({
      auth: { isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const notificationItems = await screen.findAllByRole('listitem');
    expect(notificationItems.length).toBe(notificationsMockData.length);
    expect(notificationItems[0]).toHaveTextContent('New Notification 1');
  });

  test('calls logOut function and shows alert when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();

    const store = mockStore({
      auth: { isLoggedIn: true },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

  test('clicking a notification item removes it and logs the correct message', () => {
    const notificationMockData = [
      { id: 1, text: 'New Notification 1' },
    ];

    mockAxios.onGet('/path/to/notifications.json').reply(200, notificationMockData);

    const store = mockStore({
      auth: { isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const notificationButton = screen.getByText(/your notification/i);
    fireEvent.click(notificationButton);

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBeGreaterThan(0);

    fireEvent.click(notificationItems[0]);

    const updatedNotificationItems = screen.queryAllByRole('listitem');
    expect(updatedNotificationItems.length).toBe(notificationItems.length - 1);

    expect(console.log).toHaveBeenCalledWith(
      `Notification ${notificationItems[0].getAttribute('data-id')} has been marked as read`
    );
  });
});
