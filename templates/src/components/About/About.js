import React from 'react'
import './style.css'
import avatar from '../../images/avatar.png'

const About = () =>
  <div className="about">
    <img src={avatar} className="avatar"/>
    <h1>hello, i'm <span>darvin</span>.</h1>
    <h4>please be patient. the site is under construction.<br/>
    please see my <strong>Github</strong> for more details.</h4>
  </div>

export default About