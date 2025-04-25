import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  getStyle = (type) => {
    return type === 'urgent' ? styles.urgent : styles.default;
  };

  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    const itemClass = css(styles.item, this.getStyle(type));

    const content = html ? (
      <li
        className={itemClass}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
      />
    ) : (
      <li
        className={itemClass}
        data-notification-type={type}
        onClick={this.handleClick}
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
    borderBottom: '1px solid black',
    width: '100%', 
    '@media (max-width: 900px)': {
      fontSize: '20px', 
      padding: '10px 8px', 
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
};

export default NotificationItem;
