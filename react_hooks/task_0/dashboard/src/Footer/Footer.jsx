import React, { useContext } from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';

function Footer() {
  const { user, logOut } = useContext(newContext);

  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      {user?.isLoggedIn ? (
        <>
          <p>Welcome {user.email}</p>
          <p>
            <a href="#" onClick={logOut}>Logout</a>
          </p>
        </>
      ) : (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
