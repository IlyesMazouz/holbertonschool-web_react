import './App.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from './Notifications';

function App() {
  const year = new Date().getFullYear();

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
        <p>Copyright {year} - holberton School</p>
      </div>
    </>
  );
}

export default App;
