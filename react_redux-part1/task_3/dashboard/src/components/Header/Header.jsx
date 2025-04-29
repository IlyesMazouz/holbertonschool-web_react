import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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

function Header() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)} />
      <h1>School dashboard</h1>

      {isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          <p>
            Welcome {user.email} (<span onClick={handleLogout} style={{ cursor: 'pointer' }}>logout</span>)
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
