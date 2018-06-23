import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import './style.css'

const Footer = () =>
  <div className="footer">
    <div className="float-left">
        <FontAwesome.FaHeart/> made by <a href="http://github.com/ddz369" target="_blank" rel="noopener noreferrer"><span><strong>darvin</strong></span></a>
    </div>
    <div className="float-right">
      <a href="http://github.com/ddz369" target="_blank" rel="noopener noreferrer"><FontAwesome.FaGithub/></a>&emsp;
      <a href="http://linkedin.com/in/darvinzhang" target="_blank" rel="noopener noreferrer"><FontAwesome.FaLinkedin/></a>&emsp;
      <a href="https://drive.google.com/open?id=14pyFSjAicbnNvtWxOAeqWaNgPyefwxmo" target="_blank" rel="noopener noreferrer"><FontAwesome.FaGoogle/></a>&emsp;
      <a href="http://twitter.com/ddz369" target="_blank" rel="noopener noreferrer"><FontAwesome.FaTwitter/></a>
    </div>
  </div>

export default Footer