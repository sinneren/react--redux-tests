import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { News } from './containers/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <News />
        </main>
      </div>
    );
  }
}

export default App;
