import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header className="header-container">
          <Navigation />
        </header>
        <body className="content-container">
        <h1 className="App-title">Welcome to my Site!</h1>
        </body>
        <footer className="footer-container">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </footer>
      </div>
    );
  }
}

export default App;
