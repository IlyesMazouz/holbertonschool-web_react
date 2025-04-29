import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
} from '../notifications/notificationsSlice';

import axiosMock from 'axios';
import { getLatestNotification } from '../../../utils/utils';

jest.mock('axios');

const mockNotifications = [
  { id: 1, value: 'First notification' },
  { id: 2, value: 'Second notification' },
  { id: 3, value: 'Third notification' },
];

describe('notificationsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notifications: notificationsReducer,
      },
    });
  });

  it('should return the correct initial state', () => {
    const state = store.getState().notifications;
    expect(state.notifications).toEqual([]);
    expect(state.displayDrawer).toBe(true);
  });

  it('should handle fetching notifications correctly', async () => {
    axiosMock.get.mockResolvedValue({ data: mockNotifications });

    await store.dispatch(fetchNotifications());

    const state = store.getState().notifications;
    expect(state.notifications).toEqual(mockNotifications);
    expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:5173/notifications.json');
  });

  it('should handle the fetchNotifications and update notification with id 3', async () => {
    axiosMock.get.mockResolvedValue({ data: mockNotifications });

    await store.dispatch(fetchNotifications());

    const state = store.getState().notifications;
    const updatedNotification = state.notifications.find((n) => n.id === 3);
    expect(updatedNotification.value).toBe(getLatestNotification());
  });

  it('should handle the markNotificationAsRead action', () => {
    store.dispatch({
      type: 'notifications/fetchNotifications/fulfilled',
      payload: mockNotifications,
    });

    store.dispatch(markNotificationAsRead(1));

    const state = store.getState().notifications;
    expect(state.notifications.length).toBe(2);
    expect(state.notifications.some((n) => n.id === 1)).toBe(false);
    console.log = jest.fn();
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been removed');
  });

  it('should handle the showDrawer action', () => {
    store.dispatch(showDrawer());
    const state = store.getState().notifications;
    expect(state.displayDrawer).toBe(true);
  });

  it('should handle the hideDrawer action', () => {
    store.dispatch(hideDrawer());
    const state = store.getState().notifications;
    expect(state.displayDrawer).toBe(false);
  });
});
