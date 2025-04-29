import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestNotification } from '../../utils/utils';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await fetch(ENDPOINTS.notifications);
    const data = await response.json();

    const updatedNotifications = data.map((notification) =>
      notification.id === 3
        ? { ...notification, value: getLatestNotification() }
        : notification
    );

    return updatedNotifications;
  }
);

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const id = action.payload;
      console.log(`Notification ${id} has been removed`);
      state.notifications = state.notifications.filter(n => n.id !== id);
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  },
});

export const {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
