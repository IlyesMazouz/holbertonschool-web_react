import './App.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';
import './Notifications.css';

function App() {
  const year = getCurrentYear();
  const footerText = getFooterCopy(false);

  return (
    <>
    <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {year} - {footerText}</p>
      </div>
    </>
  );
}

export default App;
