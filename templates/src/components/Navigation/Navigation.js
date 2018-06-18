import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import './style.css'

const Navigation = () =>
  <div className="nav-bar">
    <NavLink to={routes.ABOUT} activeStyle={{ textDecoration: 'underline'}}>about</NavLink>&ensp;|&ensp;
    <NavLink to={routes.PORTFOLIO} activeStyle={{ textDecoration: 'underline' }}>portfolio</NavLink>&ensp;|&ensp;
    <NavLink to={routes.CONTACT} activeStyle={{ textDecoration: 'underline' }}>contact</NavLink>
  </div>

export default Navigation