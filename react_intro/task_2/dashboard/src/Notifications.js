import React from 'react';
import { getLatestNotification } from './utils';

function Notifications() {
  const buttonStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={{ position: 'relative', padding: '10px', border: '1px solid black', width: '400px' }}>
      <p>Here is the list of notifications</p>
      <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        x
      </button>
      <ul>
        <li data-priority="default" style={{ color: 'blue' }}>New course available</li>
        <li data-priority="urgent" style={{ color: 'red' }}>New resume available</li>
        <li
          data-priority="urgent"
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
