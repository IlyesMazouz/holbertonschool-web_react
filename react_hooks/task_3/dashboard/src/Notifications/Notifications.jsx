import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeButton from '../assets/close-button.png';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer, notifications }) => {
  const [notificationList, setNotificationList] = useState(notifications);

  useEffect(() => {
    setNotificationList(notifications);
  }, [notifications]);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotificationList((prevList) => prevList.filter((notification) => notification.id !== id));
  }, []);

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
              {notificationList.length === 0
                ? 'No new notifications for now'
                : 'Here is the list of notifications'}
            </p>
            <ul className={css(styles.ul)}>
              {notificationList.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  html={notification.html}
                  value={notification.value}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  notifications: [],
};

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

function areEqual(prevProps, nextProps) {
  return (
    prevProps.displayDrawer === nextProps.displayDrawer &&
    prevProps.notifications.length === nextProps.notifications.length &&
    prevProps.notifications.every((notif, index) => 
      notif.id === nextProps.notifications[index].id &&
      notif.type === nextProps.notifications[index].type &&
      notif.value === nextProps.notifications[index].value &&
      (notif.html ? notif.html.__html : '') === (nextProps.notifications[index].html ? nextProps.notifications[index].html.__html : '')
    )
  );
}

export default React.memo(Notifications, areEqual);
