import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import * as routes from '../constants/routes'
import Navigation from './Navigation'
import Footer from './Footer'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './App.css';

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
            <Redirect from="/" exact to={routes.ABOUT}/>
            <Route exact path={routes.ABOUT} component={About} />
            <Route exact path={routes.PORTFOLIO} component={Portfolio} />
            <Route exact path={routes.CONTACT} component={Contact} />
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
