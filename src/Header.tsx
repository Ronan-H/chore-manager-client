import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderOption from './HeaderOption';
import { ChoreContext } from './ChoreContext';

function Header() {
  const choreContext = useContext(ChoreContext);

  const onShowExpiredChanged = (checked: boolean) => {
    choreContext.showExpired = checked;
  };

  const onShowExpiringChanged = (checked: boolean) => {
    choreContext.showExpiring = checked;
  };

  const onShowAllChanged = (checked: boolean) => {
    choreContext.showAll = checked;
  };

  return (
    <header className="header">
      <span>
        <HeaderOption
          text='Show Expired'
          defaultChecked={choreContext.showExpired}
          onChange={onShowExpiredChanged} />
        <HeaderOption
          text='Show Expiring'
          defaultChecked={choreContext.showExpiring}
          onChange={onShowExpiringChanged} />
        <HeaderOption
          text='Show All'
          defaultChecked={choreContext.showAll}
          onChange={onShowAllChanged} />
      </span>
    </header>
  );
}

export default Header;
