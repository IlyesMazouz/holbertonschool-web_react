import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
