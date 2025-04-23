const NotificationItem = ({ type, value, html }) => {
	const getColor = (type) => {
	  switch (type) {
		case 'urgent':
		  return 'red';
		case 'default':
		default:
		  return 'blue';
	  }
	};
  
	return (
	  <li
		style={{ color: getColor(type) }}
		data-notification-type={type}
		dangerouslySetInnerHTML={{ __html: html || value }} 
	  />
	);
  };
  
  export default NotificationItem;
  