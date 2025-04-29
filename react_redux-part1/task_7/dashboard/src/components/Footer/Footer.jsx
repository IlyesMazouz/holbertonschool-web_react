import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import { useSelector } from 'react-redux';

function Footer() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App-footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      {isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
