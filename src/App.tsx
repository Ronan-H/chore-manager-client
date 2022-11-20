import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { ChoreContext } from './ChoreContext';
import ChoreView from './ChoreView';

function App() {
  const choreContext = useContext(ChoreContext);

  return (
    <div className="app">
      <Header />
      <ChoreView />
    </div>
  );
}

export default App;
