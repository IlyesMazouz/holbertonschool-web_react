import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  getStyle = (type) => {
    return type === 'urgent' ? styles.urgent : styles.default;
  };

  render() {
    const { type, value, html, onClick } = this.props; // Destructure onClick
    const itemClass = css(styles.item, this.getStyle(type));

    // If html exists, wrap it in an object with __html key
    const content = html ? (
      <li
        className={itemClass}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }} // Fixed this part
        onClick={onClick} // Call onClick when clicked
      />
    ) : (
      <li
        className={itemClass}
        data-notification-type={type}
        onClick={onClick} // Call onClick when clicked
      >
        {value}
      </li>
    );

    return content;
  }
}

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

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  onClick: () => {},
};

export default NotificationItem;
