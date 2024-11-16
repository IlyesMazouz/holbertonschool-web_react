import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
  ]);

  const toggleType = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id
          ? { ...notif, type: notif.type === "default" ? "urgent" : "default" }
          : notif
      )
    );
  };

  return (
    <div>
      <ul>
        {notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            value={notif.value}
            onClick={() => toggleType(notif.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
