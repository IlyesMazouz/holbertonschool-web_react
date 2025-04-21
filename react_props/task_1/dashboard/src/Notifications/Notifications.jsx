import React from 'react';
import './Notifications.css';
import closeButton from "../assets/close-button.png";
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const handleClick = () => console.log('Close button has been clicked');

  return (
    <div className="notifications">
      <button className="close-button" aria-label="Close" onClick={handleClick}>
        <img src={closeButton} alt="close icon" className="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
