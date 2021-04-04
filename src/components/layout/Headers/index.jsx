import React from 'react';
import { Link } from 'react-router-dom';
import Headers from './style';
import Logo from '../../../yt_logo_rgb_dark.png';

export default function Header() {
  return (
    <Headers>
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={Logo} alt="logo" />
        </Link>
        <span className="logo-code">Clone</span>
      </div>

      <Link to="/feed/explore">탐색</Link>
    </Headers>
  );
}
