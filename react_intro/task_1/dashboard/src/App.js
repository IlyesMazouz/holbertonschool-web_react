import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">School dashboard</h1>
      </header>
      <main className="App-body">
        <p className="body-text">Login to access the full dashboard</p>
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
