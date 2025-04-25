import React, { Component } from 'react';
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

const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

class App extends Component {
  static defaultProps = {
    logOut: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
      notificationsList: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ],
      coursesList: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    const { notificationsList, coursesList } = this.state;

    return (
      <>
        <div className={css(styles.body)}>
          <div className="root-notifications">
            <Notifications notifications={notificationsList} />
          </div>
          <Header />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>
        <Footer className={css(styles.footer)} />
      </>
    );
  }
}

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
