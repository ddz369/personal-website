import React, { Component } from 'react';
import avatar from '../images/avatar.png';
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
            <img src={avatar} className="avatar"/>
            <h1>HELLO,I'M DARVIN.</h1>
            <h4>please be patient. the site is under construction. <br/>
            please see my <strong>Github</strong> for more details.</h4>
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
