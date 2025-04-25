import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    padding: '2rem',
  },
  input: {
    margin: '0 10px 0 10px',
  },
  button: {
    marginLeft: '10px',
  },
});

const Login = () => {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input className={css(styles.input)} type="password" id="password" name="password" />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

export default Login;
