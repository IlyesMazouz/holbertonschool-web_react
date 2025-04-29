import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markNotificationAsRead } from '../../features/notifications/notificationsSlice';
import NotificationItem from '../NotificationItem/NotificationItem';
import closeButton from '../../assets/close-button.png';

const Notifications = React.memo(() => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const [isVisible, setIsVisible] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleToggleDrawer = () => {
    setIsVisible((prev) => !prev);
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <>
      {!isVisible && (
        <button className={css(styles.menuItem)} onClick={handleToggleDrawer}>
          Your notifications
        </button>
      )}

      <div
        ref={drawerRef}
        className={css(styles.notificationsContainer, isVisible && styles.visible)}
      >
        <div className={css(styles.notificationsTitle)}>Your notifications</div>
        <div className={css(styles.notifications)}>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={handleToggleDrawer}
          >
            <img src={closeButton} alt="close icon" className={css(styles.closeIcon)} />
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
    </>
  );
}, () => true);

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },
  '25%': {
    transform: 'translateY(-5px)',
  },
  '50%': {
    transform: 'translateY(0)',
  },
  '75%': {
    transform: 'translateY(-2px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

const fade = {
  'from': {
    opacity: 0,
  },
  'to': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  '@keyframes': {
    bounce,
    fade,
  },
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
      animationName: ['bounce', 'fade'],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 1',
      animationDirection: 'alternate, normal',
    },
  },
  notificationsContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 101,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
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
