import React, { Component } from 'react';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import './App.css';

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends Component {
  static defaultProps = {
    logOut: () => {},
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn = false } = this.props;
    return (
      <div className="App">
        <Notifications />
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
