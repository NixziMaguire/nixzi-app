import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import TicTacToe from './Game/TicTacToe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;