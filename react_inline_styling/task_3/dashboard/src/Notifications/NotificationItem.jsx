import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  getStyle = (type) => {
    return type === 'urgent' ? styles.urgent : styles.default;
  };

  render() {
    const { type, value, html, onClick } = this.props; 
    const itemClass = css(styles.item, this.getStyle(type));

    const content = html ? (
      <li
        className={itemClass}
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }} 
        onClick={onClick} 
      />
    ) : (
      <li
        className={itemClass}
        data-notification-type={type}
        onClick={onClick} 
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
