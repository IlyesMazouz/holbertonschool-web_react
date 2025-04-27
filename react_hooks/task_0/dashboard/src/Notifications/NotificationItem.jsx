import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    console.log(`Notification ${id} has been marked as read`);
    markAsRead(id);
  };

  getStyle = (type) => {
    return type === 'urgent' ? styles.urgent : styles.default;
  };

  render() {
    const { type, value, html } = this.props;
    const itemClass = css(styles.item, this.getStyle(type));

    if (html) {
      return (
        <li
          className={itemClass}
          data-notification-type={type}
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={this.handleClick}
        />
      );
    }

    return (
      <li
        className={itemClass}
        data-notification-type={type}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: '',
  markAsRead: () => {},
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

export default NotificationItem;
