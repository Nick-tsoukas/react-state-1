import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Random from './Random';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Game />
      <Random maxNum={100} />
      <Button />
    </div>
  );
}

export default App;
