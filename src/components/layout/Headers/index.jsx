import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Headers from './style';
import Logo from '../../../assets/yt_logo_rgb_dark.png';
import { CamSvg, AppSvg, BellSvg, SearchSvg } from '../../../assets/ComSvg';

export default function Header() {
  return (
    <Headers>
      <div className="nav">
        <div className="logo">
          <FontAwesomeIcon icon={faBars} className="menu-bar" />
          <div>
            <Link to="/">
              <img className="logo-image" src={Logo} alt="logo" />
            </Link>
            <span className="logo-code">Clone</span>
          </div>
        </div>
        <div className="search-form">
          <input
            className="nav-search"
            type="text"
            name="search"
            value="검색"
          />
          <div className="nav-btn">
            <SearchSvg Theme />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-right-icon">
            <CamSvg Theme />
          </div>
          <div className="nav-right-icon">
            <AppSvg Theme />
          </div>
          <div className="nav-right-icon">
            <BellSvg Theme />
          </div>
        </div>
      </div>

      <Link to="/feed/explore">탐색</Link>
    </Headers>
  );
}
