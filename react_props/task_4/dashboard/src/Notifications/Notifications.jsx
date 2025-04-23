import React from 'react';
import NotificationItem from './NotificationItem';
import closeButton from '../assets/close-button.png';
import './Notifications.css';

function Notifications({ notifications = [] }) {
  const handleClick = () => console.log('Close button has been clicked');

  return (
    <div className="notifications">
      <button className="close-button" aria-label="Close" onClick={handleClick}>
        <img src={closeButton} alt="close icon" className="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
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
  );
}

export default Notifications;
