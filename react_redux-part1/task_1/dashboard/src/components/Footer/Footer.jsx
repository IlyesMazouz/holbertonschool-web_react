import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function Footer({ user }) {
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
