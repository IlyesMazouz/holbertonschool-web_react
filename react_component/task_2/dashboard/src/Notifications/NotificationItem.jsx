import React, { Component } from 'react';

class NotificationItem extends Component {
  getColor = (type) => {
    switch (type) {
      case 'urgent':
        return 'red';
      case 'default':
      default:
        return 'blue';
    }
  };

  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    const content = html ? (
      <li
        style={{ color: this.getColor(type) }}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
      />
    ) : (
      <li
        style={{ color: this.getColor(type) }}
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
