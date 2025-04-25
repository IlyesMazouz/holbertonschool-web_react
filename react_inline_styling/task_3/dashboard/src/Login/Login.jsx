import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    width: '200px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

class Login extends Component {
  render() {
    return (
      <div className={css(styles.form)}>
        <label className={css(styles.label)} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={css(styles.input)}
          required
        />
        <label className={css(styles.label)} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={css(styles.input)}
          required
        />
        <button className={css(styles.button)} type="submit">
          Login
        </button>
      </div>
    );
  }
}

export default Login;
