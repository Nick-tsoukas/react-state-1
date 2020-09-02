import React from 'react';
import './App.css';
import Zen from './Zen';
import GithubUserInfo from './GitHubUserInfo';



function App() {
  return (
    <div className="App">
      <GithubUserInfo username="facebook" />
    </div>
  );
}

export default App;
