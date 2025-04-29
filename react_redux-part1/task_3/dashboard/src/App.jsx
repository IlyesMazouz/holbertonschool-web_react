import React, { useReducer, useEffect, useCallback } from 'react';
import Notifications from "./components/Notifications/Notifications";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import { getLatestNotification } from './utils/utils';
import WithLogging from './components/HOC/WithLogging';
import LoginBase from './pages/Login/Login';
import CourseListBase from './pages/CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import { appReducer, initialState, APP_ACTIONS } from './appReducer';
import { Provider } from 'react-redux';
import store from './App/store';

const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const logIn = useCallback((email, password) => {
    dispatch({ type: APP_ACTIONS.LOGIN, email, password });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, id });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/path/to/notifications.json');
        dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, notifications: response.data });
      } catch (error) {
        console.error('Error fetching notifications data:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    if (state.user.isLoggedIn) {
      const fetchCourses = async () => {
        try {
          const response = await axios.get('/path/to/courses.json');
          dispatch({ type: APP_ACTIONS.SET_COURSES, courses: response.data });
        } catch (error) {
          console.error('Error fetching courses data:', error);
        }
      };

      fetchCourses();
    }
  }, [state.user.isLoggedIn]);

  return (
    <Provider store={store}>
      <div className={css(styles.body)}>
        <div className="root-notifications">
          <Notifications
            displayDrawer={state.displayDrawer}
            notifications={state.notifications}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
        <Header 
          logOut={logOut} 
          user={state.user} 
          handleDisplayDrawer={handleDisplayDrawer} 
          handleHideDrawer={handleHideDrawer}
        />
        {state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={state.courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
        <Footer className={css(styles.footer)} user={state.user} />
      </div>
    </Provider>
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
