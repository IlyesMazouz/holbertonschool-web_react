import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
});

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    const content = html ? (
      <li
        className={css(type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
      />
    ) : (
      <li
        className={css(type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
    return content;
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
