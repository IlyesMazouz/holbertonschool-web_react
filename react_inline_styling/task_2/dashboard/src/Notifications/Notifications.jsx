import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import closeButton from '../assets/close-button.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed red',
    padding: '10px',
    position: 'relative',
    marginTop: '5px',
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
  },
  closeIcon: {
    height: '10px',
    width: '10px',
  },
});

class Notifications extends Component {
  handleClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className={css(styles.notificationsTitle)}>Your notifications</div>

        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button className={css(styles.closeButton)} aria-label="Close" onClick={this.handleClick}>
              <img src={closeButton} alt="close icon" className={css(styles.closeIcon)} />
            </button>
            <p>
              {notifications.length === 0
                ? 'No new notification for now'
                : 'Here is the list of notifications'}
            </p>
            <ul>
              {notifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  html={notification.html}
                  value={notification.value}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
