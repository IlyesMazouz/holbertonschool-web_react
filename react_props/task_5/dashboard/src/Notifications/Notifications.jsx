import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeButton from '../assets/close-button.png';
import './Notifications.css';

function Notifications({ displayDrawer = false, notifications = [] }) {
  const handleClick = () => console.log('Close button has been clicked');

  return (
    <>
      <div className="notifications-title">Your notifications</div>

      {displayDrawer && (
        <div className="notifications">
          <button className="close-button" aria-label="Close" onClick={handleClick}>
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
                type={notification.type}
                html={notification.html}
                value={notification.value}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Notifications;
