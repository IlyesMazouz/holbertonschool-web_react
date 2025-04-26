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
      email: props.email || '',
      password: props.password || '',
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setState({
      enableSubmit: emailRegex.test(email) && password.length >= 8,
    });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn(email, password);
  }

  render() {
    const { enableSubmit, email, password } = this.state;

    return (
      <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input
          className={css(styles.input)}
          id="email"
          type="email"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <label className={css(styles.label)} htmlFor="password">Password:</label>
        <input
          className={css(styles.input)}
          id="password"
          type="password"
          value={password}
          onChange={this.handleChangePassword}
        />
        <button className={css(styles.button)} type="submit" disabled={!enableSubmit}>
          OK
        </button>
      </form>
    );
  }
}

export default Login;
