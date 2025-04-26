import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { newContext } from '../Context/context';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e1003c',
    borderBottom: '3px solid #e1003c',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  logo: {
    height: '200px',
    marginRight: '20px',
  },
  logoutSection: {
    marginTop: '20px',
    textAlign: 'center',
  },
});

class Header extends React.Component {
  static contextType = newContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={logo} alt="holberton logo" className={css(styles.logo)} />
        <h1>School dashboard</h1>

        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <p>
              Welcome {user.email} (<span onClick={logOut}>logout</span>)
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
