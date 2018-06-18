import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import './style.css'

const Footer = () =>
  <div className="footer">
    <a href="http://github.com/ddz369" target="_blank"><FontAwesome.FaGithub/></a>&emsp;
    <a href="http://linkedin.com/in/darvinzhang" target="_blank"><FontAwesome.FaLinkedin/></a>&emsp;
    <a href="http://twitter.com/ddz369" target="_blank"><FontAwesome.FaTwitter/></a>
  </div>

export default Footer