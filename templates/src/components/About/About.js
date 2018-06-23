import React from 'react'
import './style.css'
/* import avatar from '../../images/avatar.png'
import * as FontAwesome from 'react-icons/lib/fa' */

class About extends React.Component {
    state = { loading: true };

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
    const { loading } = this.state;

    if(loading) {
        return null;
    }

    return (
      <div className="about">
        <h1>darvin zhang</h1>
        <h4>software engineer | it | web development | game developer</h4>
        <hr/>
        <br/>
        <div className="align-left">
        <h6>
        hello! welcome to my website! my name is darvin and i am a recent software engineer graduate from the university of saskatchewan.
        <br/><br/>
        most of my professional development experience was in c#, .net, powershell, and sql. i am currently experimenting with web development
        through react, google app engine, and python flask (which was what i used to build&nbsp;
        <a href="https://github.com/ddz369/personal-website" target="_blank" rel="noopener noreferrer"><span><strong>this site</strong></span></a>).
        <br/><br/>
        you will find that i am a passionate, committed developer with who values communication and best practices.
        </h6>
        </div>
      </div>
    );
  }
}

export default About