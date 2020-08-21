import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iconlist from './Iconlist';
import LottoGame from './LottoGame';


function App() {
  return (
    <div className="App">
      <LottoGame title="Mega Game" numBalls={10} maxNum={40} />
      <LottoGame title="Mini Game" numBalls={5} maxNum={10} />
    </div>
  );
}

export default App;
