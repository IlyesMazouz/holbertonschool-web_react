import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './holberton-logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1 className="header-title">School dashboard</h1>
      </header>
      <main className="App-body">
        <p className="body-text">Login to access the full dashboard</p>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />

        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p className="footer-text">
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
