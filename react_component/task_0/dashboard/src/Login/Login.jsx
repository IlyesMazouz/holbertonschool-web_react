import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label>email:</label>

          <input type="text" name="email" />
          <label>password:</label>
          
          <input type="text" name="password" />
          <button>OK</button>
        </div>
    )
}
export default Login;
