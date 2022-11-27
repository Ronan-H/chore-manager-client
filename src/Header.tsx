import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderOption from './HeaderOption';
import { ChoreContext } from './ChoreContext';

type HeaderProps = {
  showExpired: boolean,
  setShowExpired: any,
  showExpiring: boolean,
  setShowExpiring: any
}

function Header(props: HeaderProps) {

  return (
    <header className="header">
      <span>
        <HeaderOption
          text='Show Expired'
          checked={props.showExpired}
          onChange={props.setShowExpired} />
        <HeaderOption
          text='Show Expiring'
          checked={props.showExpiring}
          onChange={props.setShowExpiring} />
      </span>
    </header>
  );
}

export default Header;
