import React from 'react'
import './style.css'
import avatar from '../../images/avatar.png'
import * as FontAwesome from 'react-icons/lib/fa'

class About extends React.Component {
    state = { loading: true };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 500);
    }

    render() {
    const { loading } = this.state;

    if(loading) {
        return null;
    }

    return (
      <div className="about">
        <img src={avatar} className="avatar" alt=""/>
        <h1>hello, i'm <span>darvin</span>.</h1>
        <h4>please be patient. the site is under construction.<br/>
        please see my <strong>Github</strong> for more details.</h4>
        <h2>
          <a href="http://github.com/ddz369" target="_blank" rel="noopener noreferrer"><FontAwesome.FaGithub/></a>&emsp;
          <a href="http://linkedin.com/in/darvinzhang" target="_blank" rel="noopener noreferrer"><FontAwesome.FaLinkedin/></a>&emsp;
          <a href="https://drive.google.com/open?id=14pyFSjAicbnNvtWxOAeqWaNgPyefwxmo" target="_blank" rel="noopener noreferrer"><FontAwesome.FaGoogle/></a>&emsp;
          <a href="http://twitter.com/ddz369" target="_blank" rel="noopener noreferrer"><FontAwesome.FaTwitter/></a>
        </h2>
      </div>
    );
  }
}

export default About