import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import closeButton from '../assets/close-button.png';
import './Notifications.css';

class Notifications extends Component {
  handleClick = () => {
    console.log('Close button has been clicked');
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className="notifications-title">Your notifications</div>

        {displayDrawer && (
          <div className="notifications">
            <button className="close-button" aria-label="Close" onClick={this.handleClick}>
              <img src={closeButton} alt="close icon" className="close-icon" />
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
