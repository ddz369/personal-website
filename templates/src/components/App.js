import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

import Navigation from './Navigation'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header className="navigation-container">
          <Navigation />
        </header>
        <body className="content-container">
          <div className="content">
            <h1>Welcome to my Site!</h1>
            <h3>Site is under <strong>construction</strong></h3>
            <h3>Site is under <strong>construction</strong></h3>
            <h3>Site is under <strong>construction</strong></h3>
          </div>
        </body>
        <footer className="footer-container">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
