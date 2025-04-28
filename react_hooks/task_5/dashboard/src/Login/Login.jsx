import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import useLogin from '../hooks/useLogin';

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

function Login({ logIn }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin(logIn);

  return (
    <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
      <label className={css(styles.label)} htmlFor="email">Email:</label>
      <input
        className={css(styles.input)}
        id="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <label className={css(styles.label)} htmlFor="password">Password:</label>
      <input
        className={css(styles.input)}
        id="password"
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button className={css(styles.button)} type="submit" disabled={!enableSubmit}>
        OK
      </button>
    </form>
  );
}

export default Login;
