import React, { useState } from 'react';
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

function Login(props) {
  const [email, setEmail] = useState(props.email || '');
  const [password, setPassword] = useState(props.password || '');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEnableSubmit(emailRegex.test(email) && password.length >= 8);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { logIn } = props;
    if (logIn) {
      logIn(email, password);
    }
  };

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
