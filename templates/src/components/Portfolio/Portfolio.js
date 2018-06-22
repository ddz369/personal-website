import React from 'react'
import './style.css'

import chatapp from '../../images/chatapp.png'
import gamejam2015 from '../../images/gamejam2015.png'
import gamejam2016 from '../../images/gamejam2016.png'
import lynkcoin from '../../images/lynkcoin.png'
import phonenanza from '../../images/phonenanza.png'
import qmlab from '../../images/qmlab.png'
import stackwars from '../../images/stackwars.png'
import videoroulette from '../../images/videoroulette.png'

class Portfolio extends React.Component {
    state = { loading: true };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
    const { loading } = this.state;

    if(loading) {
        return null;
    }

    return (
      <div className="portfolio" alt="">
        <ul>
          <li>
            <h2>lynkcoin website</h2>
            <h6>
            A two-man website being developed in Python, React, and Google App Engine. The site, in a nutshell, is to generate a new
            cryptocurrency (LynkCoin) that can be purchased through Coinbase from our website and is to later be put on blockchain.
            With the currency, users can generate tasks via our website by putting a set amount of LynkCoin as a bounty to a task.
            Whenever the task is performed by another user, a percentage of the bounty is retained (until the bounty depletes). The
            tasks range from visiting a website, getting more Twitter followers, upvoting a Reddit thread, etc. Our site is built with a
            Python Flask back-end, uses Firebase for authentication, Google/Firebase database for storage, and uses HTML, CSS,
            React, Redux, and JQuery for the front end. The site also currently supports Twitter OAuth, Twilio phone verification, and
            sends structured data through RESTful JSON services.
            </h6>
            <img src={lynkcoin} alt=""/>
          </li>
          <li>
            <h2>videoroulette</h2>
            <h6>
            A two-man website that served as a boilerplate-esque project to test react-video, our video server, and disqus forums.
            The project was built with Python Flask backend, Google App Engine, Google Realtime DB, and React. The concept of the site
            was one where users would be able to freely add random videos to. Then, there would be a “roulette” button where users randomly
            obtain a video to watch. Additionally, a disqus forum thread was to be generated for unique chatting in each video.
            It was a eye-opening project where we uncovered errors such the fact disqus would not change threads unless the url was changed.
            Overall, the project did what it was designed for and proved to be good experience for my future web development projects.
            </h6>
            <img src={videoroulette} alt=""/>
          </li>
          <li>
            <h2>multi-language chatroom app</h2>
            <h6>
            In the fall of 2017, I had the pleasure of creating client server based chat room applications for my Cloud Computing class.
            The concept was fairly simple, you required a chat room that could serve multiple clients, and that would be able
            create/list/join(which had to list the current comment history of the room on join) chatrooms while also needing to clean up
            dead clients/unused chat rooms. The added catch was that the implementation had to be done with a variety of different technologies,
            services, and programming languages. In total, I managed to develop a chat room with web services (REST/SOAP), middleware
            (CORBA, Remoting, RMI, Message Passing) and through sockets with Java, C#,  and Go. The initially tedious task ended up allowing me
            to practice crucial concepts such as multi-threading, asynchronous functions, and locking.
            </h6>
            <img src={chatapp} alt=""/>
          </li>
          <li>
            <h2>qm-lab app</h2>
            <h6>
            A twelve-man project that involved designing, testing, and building a collaborative modelling platform for users to generate
            diagrams of various systems. The project was developed with the Spiral software development methodology and had our
            team split up into 3 groups (design, programming, and testing). Each group had separate leaders, controlling the workflow
            of their respective group. The application itself was developed in google app engine, for real time interactions, along with
            JointJS, BackboneJS, CSS, and HTML. Testing (unit, spike, smoke, functional) was done with Selenium. My role in the
            project was mainly with the design team, where I developed UML diagrams, presentations, documentation, and user
            manuals. However, it should be noted that each member of our team had some time working within each other group. The
            product ended up being a real-time modelling application that was very similar to draw.io.
            </h6>
            <img src={qmlab} alt=""/>
          </li>
          <li>
            <h2>robot fighting simulator</h2>
            <h6>
            A five man project build in Java with the guidelines of the Waterfall software development method. The game in a nutshell
            allowed the user to choose teams of robots whom fought one another using a turn-based format, on a hex grid map. The
            robots were to be written in Forth, a stack based language, and had to translate by an interpreter in order to function in the
            game. My major role within this project involved mainly around creation of our robot scripts, and the functions within the
            robot. As an added note, it was mentioned that we were one of the only groups that produced a working product.
            </h6>
            <img src={stackwars} alt=""/>
          </li>
          <li>
            <h2>phonenanza HCI</h2>
            <h6>
            As per my Human Computer Interactions class I, along with three fellow colleagues,  were given the task of designing and prototyping a HCI design
            challenge which either had to be a upgraded version of a current design (website, app, console) or a new innovative idea that seeked to tackle a real
            life problem. Together, my group decided on designing a solution to a problem we each faced, picking out out a phone and plan best fit for us in a relatively
            quick amount of time. With that unified idea in mind, we developed a innovative, mobile friendly layout that catered to both tech savvy and inexperienced users.
            The designed incorporated the option to select a phone, a plan, or the combination together. It would track your current location with permissions and offered a
            questionnaire to new/indecisive users. In the end, you were to email a copy of your selection to yourself (and potentially purchase it, but that was not implemented
            as of the prototype).
            </h6>
            <img src={phonenanza} alt=""/>
          </li>
          <li>
            <h2>cyberblitz arena fighter</h2>
            <h6>
            For Game Jam February 2016, our group created the game Cyberblitz, a 2D arena fighter based game - similar to Smash Bros.
            The game was created using Unity C# and gathered from our previous Game Jam experience. We recruited additional members
            since last, such as a sprite artist, which allowed the program to be developed efficiently. The game itself served up to four players,
            which each controlled a unit that had a class associated to it. Each class had their own special abilities and weaknesses in correlation to other
            classes, increasing the complexity of the game immensely. Notably, the game also had controller support. Most of my time allocated towards
            the project was with the GUI development, page flow, bug fixing, testing, balancing, and implementing our heuristic for proper game start/completion.
            </h6>
            <img src={gamejam2016} alt=""/>
          </li>
          <li>
            <h2>phage</h2>
            <h6>
            A game build with Unity C# along with three other group member within the time constraint of 48 hours for Game Jam 2015.
            The game played out similarly to Agar.IO, only with the exception of upgrades, rounds, and implementation of CPUs. My major role in the
            project was with the GUI design (along with some minor work in the game logic/interaction). For an added note, all of our developers
            had little to no experience with game development when building this project. Our team ended up getting 2nd place for best theme.
            </h6>
            <img src={gamejam2015} alt=""/>
          </li>
        </ul>
      </div>
      );
    }
}

export default Portfolio