import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, value, onClick }) => {
  const style = type === "urgent" ? { color: "red" } : { color: "black" };
  
  return (
    <li style={style} onClick={onClick}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
