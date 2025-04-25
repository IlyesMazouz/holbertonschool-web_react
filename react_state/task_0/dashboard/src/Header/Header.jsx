import React from 'react';
import logo from '../assets/holberton-logo.jpg';
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
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
