import React from 'react';
import Notifications from '../Notifications/Notifications';

const App = () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  return (
    <div className="App">
      <Notifications notifications={notificationsList} />
      <h1>Welcome to Holberton School</h1>
    </div>
  );
};

export default App;
