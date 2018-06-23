import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import './style.css'

const Navigation = () =>
  <div className="nav-bar">
    <NavLink to={routes.ABOUT} activeStyle={{ borderBottom: '1px solid #b1791e'}}>about</NavLink>&nbsp;|&nbsp;
    <NavLink to={routes.PORTFOLIO} activeStyle={{ borderBottom: '1px solid #b1791e' }}>portfolio</NavLink>&nbsp;|&nbsp;
    <NavLink to={routes.CONTACT} activeStyle={{ borderBottom: '1px solid #b1791e' }}>contact</NavLink>
  </div>

export default Navigation