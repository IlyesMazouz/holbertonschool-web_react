import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

function Notifications({ displayDrawer, notifications }) {
  return (
    <div>
      <div className="notifications-title">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          {notifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notification for now</p>
          )}
          <button
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              border: "none",
              background: "transparent",
            }}
            aria-label="Close"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

export default Notifications;
