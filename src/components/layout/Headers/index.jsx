import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import Ripples from 'react-ripples';
import Headers from './style';
import Logo from '../../../assets/yt_logo_rgb_dark.png';
import {
  CamSvg,
  AppSvg,
  BellSvg,
  MenuSvg,
  SearchSvg,
} from '../../../assets/ComSvg';

export default function Header() {
  const [inputFocus, setInputfocus] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleInputFocus() {
    setInputfocus(true);
  }

  function handleInputBlur() {
    setInputfocus(false);
  }

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  return (
    <Headers inputFocus={inputFocus}>
      <div className="nav">
        <div className="logo">
          {/* <FontAwesomeIcon icon={faBars} className="menu-bar" /> */}
          <div className="menu-bar-warpper">
            <Ripples color="#b5b5b580" during={150}>
              <div className="menu-bar">
                <MenuSvg Theme />
              </div>
            </Ripples>
          </div>
          <div>
            <Link to="/">
              <img className="logo-image" src={Logo} alt="logo" />
            </Link>
            <span className="logo-code">Clone</span>
          </div>
        </div>
        <div className="search-form">
          <div className="nav-search-container">
            <input
              className="nav-search"
              type="text"
              name="search"
              placeholder="검색"
              value={searchText}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={handleSearchText}
            />
          </div>
          <div className="nav-btn">
            <SearchSvg Theme />
          </div>
        </div>
        <div className="nav-right">
          <div className="icon-warpper">
            <Ripples color="#b5b5b580" during={150}>
              <div className="nav-right-icon">
                <CamSvg Theme />
              </div>
            </Ripples>
          </div>
          <div className="icon-warpper">
            <Ripples color="#b5b5b580" during={150}>
              <div className="nav-right-icon">
                <AppSvg Theme />
              </div>
            </Ripples>
          </div>
          <div className="icon-warpper">
            <Ripples color="#b5b5b580" during={150}>
              <div className="nav-right-icon">
                <BellSvg Theme />
              </div>
            </Ripples>
          </div>
        </div>
      </div>

      <Link to="/feed/explore">탐색</Link>
    </Headers>
  );
}
