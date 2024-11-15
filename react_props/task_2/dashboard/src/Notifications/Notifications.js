import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications:</p>
      <ul>
        {notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            value={notif.value}
            html={notif.html}
          />
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
