import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type = 'default', value = '', html = '', markAsRead }) => {
  const handleClick = () => {
    console.log(`Notification ${id} has been marked as read`);
    markAsRead(id);
  };

  const getStyle = (type) => {
    return type === 'urgent' ? styles.urgent : styles.default;
  };

  const itemClass = css(styles.item, getStyle(type));

  if (html) {
    return (
      <li
        className={itemClass}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={handleClick}
      />
    );
  }

  return (
    <li
      className={itemClass}
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  item: {
    padding: '10px 8px',
    fontSize: '14px',
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      borderBottom: '1px solid black',
    },
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default memo(NotificationItem);
