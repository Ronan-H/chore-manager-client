import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import ChoreView from './ChoreView';

function App() {
  const [showExpired, setShowExpired] = useState(true);
  const [showExpiring, setShowExpiring] = useState(false);

  return (
    <div className="app">
      <Header {...{showExpired, setShowExpired, showExpiring, setShowExpiring}} />
      <ChoreView showExpired={showExpired} showExpiring={showExpiring} />
    </div>
  );
}

export default App;
