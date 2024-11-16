import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


function Notifications({ displayDrawer = false, listNotifications = [] }) {
    return (
        <>
          <div className='notificationsContainer'>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (              
                <div className="Notifications" style={{ position: 'relative' }}>
                    <button
                        style={{ position: 'absolute', right: '10px', top: '10px' }}
                        aria-label="Close"
                        onClick={() => console.log('Close button has been clicked')}
                    >
                        <img src={closeIcon} alt="Close" />
                    </button>
                    <p>
                        {listNotifications.length > 0 ? 'Here is the list of notifications' : 'No new notification for now'}
                    </p>
                    <ul>
                        {listNotifications.length > 0 ? (
                            listNotifications.map(notification => (
                                <NotificationItem 
                                    key={notification.id} 
                                    type={notification.type} 
                                    value={notification.value} 
                                    html={notification.html} 
                                />
                            ))
                        ) : (
                            <NotificationItem value="No new notification for now" />
                        )}
                    </ul>
                </div>                
            )}
          </div>
        </>
    );
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
