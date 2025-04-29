import React, { useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/auth/authSlice';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Fetch notifications on mount
  useEffect(() => {
    const fetchNotificationsData = async () => {
      try {
        const response = await axios.get('/path/to/notifications.json');
        dispatch(fetchNotifications(response.data));
      } catch (error) {
        console.error('Error fetching notifications data:', error);
      }
    };

    fetchNotificationsData();
  }, [dispatch]);

  // Fetch courses only if the user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      const fetchCoursesData = async () => {
        try {
          const response = await axios.get('/path/to/courses.json');
          dispatch(fetchCourses(response.data));
        } catch (error) {
          console.error('Error fetching courses data:', error);
        }
      };

      fetchCoursesData();
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css(styles.body)}>
      <Notifications />
      <Header logOut={() => dispatch(logout())} />
      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={(email, password) => dispatch(login({ email, password }))} />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>
      <Footer className={css(styles.footer)} />
    </div>
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
