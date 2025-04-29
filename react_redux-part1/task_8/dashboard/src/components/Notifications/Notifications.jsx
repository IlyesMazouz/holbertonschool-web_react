import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markNotificationAsRead } from '../../features/notifications/notificationsSlice';
import { showDrawer, hideDrawer } from '../../features/notifications/notificationsSlice';
import NotificationItem from '../NotificationItem/NotificationItem';
import closeButton from '../../assets/close-button.png';

const Notifications = React.memo(() => {
  const dispatch = useDispatch();
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);
  const notifications = useSelector((state) => state.notifications.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <>
      {!displayDrawer && (
        <button
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
        >
          Your notification
        </button>
      )}

      {displayDrawer && (
        <div className={css(styles.notificationsContainer)}>
          <div className={css(styles.notificationsTitle)}>Your notifications</div>
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img
                src={closeButton}
                alt="close icon"
                className={css(styles.closeIcon)}
              />
            </button>
            <p>
              {notifications.length === 0
                ? 'No new notifications for now'
                : 'Here is the list of notifications'}
            </p>
            <ul className={css(styles.ul)}>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                    markAsRead={handleMarkAsRead}
                  />
                ))
              ) : (
                <li>No notifications available</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}, () => true);

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 100,
    border: '2px solid red',
    borderRadius: '5px',
    ':hover': {
      animation: 'bounce 0.5s 3 alternate, fade 1s 1',
    },
  },
  notificationsContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 101,
  },
  notifications: {
    border: '2px solid red',
    padding: '10px',
    backgroundColor: 'white',
    width: '250px',
    fontSize: '16px',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: 101,
  },
  notificationsTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ccc',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 102,
  },
  closeIcon: {
    height: '10px',
    width: '10px',
  },
  ul: {
    paddingLeft: '20px',
    margin: 0,
  },
});

export default Notifications;
