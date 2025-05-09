import React, { useState, useEffect, useCallback } from 'react';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import WithLogging from '../HOC/WithLogging';
import LoginBase from '../Login/Login';
import CourseListBase from '../CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';
import { newContext } from '../Context/context';
import axios from 'axios';

const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);
  const [displayDrawer, setDisplayDrawer] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/path/to/notifications.json');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications data:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    if (user.isLoggedIn) {
      const fetchCourses = async () => {
        try {
          const response = await axios.get('/path/to/courses.json');
          setCourses(response.data);
        } catch (error) {
          console.error('Error fetching courses data:', error);
        }
      };

      fetchCourses();
    }
  }, [user.isLoggedIn]);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prevNotifications) => {
      if (Array.isArray(prevNotifications)) {
        return prevNotifications.filter((notification) => notification.id !== id);
      }
      return prevNotifications;
    });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  return (
    <newContext.Provider value={{ user, logOut }}>
      <div className={css(styles.body)}>
        <div className="root-notifications">
          <Notifications
            displayDrawer={displayDrawer}
            notifications={notifications}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
        <Header logOut={logOut} />
        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
      </div>
      <Footer className={css(styles.footer)} />
    </newContext.Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1rem',
    minHeight: 'calc(100vh - 200px)',
  },
  footer: {
    borderTop: '3px solid #e1003c',
    padding: '1rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
