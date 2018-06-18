import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import './style.css'

const Navigation = () =>
  <div className="nav-bar">
    <Link to={routes.ABOUT}>about</Link>&ensp;|&ensp;
    <Link to={routes.PORTFOLIO}>portfolio</Link>&ensp;|&ensp;
    <Link to={routes.CONTACT}>contact</Link>
  </div>

export default Navigation