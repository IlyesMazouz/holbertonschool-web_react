import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-notification-type={type} style={{ color: type === 'urgent' ? 'red' : 'blue' }}>
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;
