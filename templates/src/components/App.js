import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import * as routes from '../constants/routes'
import Navigation from './Navigation'
import Footer from './Footer'
import About from './About'

import './App.css';
import avatar from '../images/avatar.png';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="main-container">
        <header className="navigation-container">
          <Navigation />
        </header>
        <body className="content-container">
          <div className="content">
            <Route exact path={routes.ABOUT} component={About} />
            <img src={avatar} className="avatar"/>
            <h1>hello, i'm <span>darvin</span>.</h1>
            <h4>please be patient. the site is under construction.<br/>
            please see my <strong>Github</strong> for more details.</h4>
          </div>
        </body>
        <footer className="footer-container">
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
