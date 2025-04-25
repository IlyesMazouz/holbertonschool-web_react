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
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.validateForm);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;

    this.setState({ enableSubmit: isEmailValid && isPasswordValid });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    console.log('Login Successful');
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.form)}>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
            value={email}
            onChange={this.handleChangeEmail}
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
            value={password}
            onChange={this.handleChangePassword}
            required
          />
          <input
            type="submit"
            className={css(styles.button)}
            value="Login"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;
