import React, { Fragment } from 'react';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import './App.css';

function App() {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  return (
    <Fragment>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
