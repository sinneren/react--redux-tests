import React, { Component } from 'react';
import './App.css';
import News from './containers/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <News />
        </main>
      </div>
    );
  }
}

export default App;
