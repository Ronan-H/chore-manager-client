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
      <HeaderOption
        text='Expired'
        checked={props.showExpired}
        onChange={props.setShowExpired} />
      <HeaderOption
        text='Expiring'
        checked={props.showExpiring}
        onChange={props.setShowExpiring} />
    </header>
  );
}

export default Header;
