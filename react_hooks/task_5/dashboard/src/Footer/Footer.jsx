import React, { useContext } from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import { newContext } from '../Context/context';

function Footer() {
  const { user } = useContext(newContext);

  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      {user?.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
