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
        this.setState({ loading: false });
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
            a two-man website being developed in python, react, and google app engine. the site, in a nutshell, is to generate a new
            cryptocurrency (lynkcoin) that can be purchased through coinbase from our website and is to later be put on blockchain.
            with the currency, users can generate tasks via our website by putting a set amount of lynkcoin as a bounty to a task.
            whenever the task is performed by another user, a percentage of the bounty is retained (until the bounty depletes). the
            tasks range from visiting a website, getting more twitter followers, upvoting a reddit thread, etc. the site is built with a
            python flask backend, uses firebase for authentication, google / firebase database for storage, and uses html, css,
            react, redux, and jquery for the front end. the site also currently supports twitter oauth, twilio phone verification, and
            sends structured data through restful json services. the website is currently down, but to see the code, please click:&nbsp;
            <a href="https://drive.google.com/drive/folders/1CUrzymEM7euW3xRFmJFCLCLANRPTe4GH" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={lynkcoin} alt=""/>
          </li>
          <li>
            <h2>videoroulette</h2>
            <h6>
            a two-man website that served as a boilerplate-esque project to test react-video, our video server, and disqus forums.
            The project was built with a python flask backend, google app engine, google realtime db, and react. the concept of the site
            was one where users would be able to freely add random videos to. then, there would be a “roulette” button where users randomly
            obtain a video to watch. additionally, a disqus forum thread was to be generated for unique chatting in each video.
            it was a eye-opening project where we uncovered errors such the fact disqus would not change threads unless the url was changed.
            overall, the project did what it was designed for and proved to be good experience for my future web development projects. to see the
            website, please click:&nbsp;
            <a href="https://cryptocoins-faith.appspot.com/" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={videoroulette} alt=""/>
          </li>
          <li>
            <h2>multi-language chatroom app</h2>
            <h6>
            in the fall of 2017, i had the pleasure of creating client server based chat room applications for my cloud computing class.
            the concept was fairly simple, you required a chat room that could serve multiple clients, and that would be able
            create, list, and join(which had to list the current comment history of the room on join) chatrooms while also needing to clean up
            dead clients / unused chat rooms. the added catch was that the implementation had to be done with a variety of different technologies,
            services, and programming languages. in total, i managed to develop a chat room with web services (rest / soap), middleware
            (corba, remoting, rmi, message passing) and through sockets with java, c#,  and go. the initially tedious task ended up allowing me
            to practice crucial concepts such as multi-threading, asynchronous functions, and locking. to see my implementation, please click:&nbsp;
            <a href="https://drive.google.com/drive/folders/1ifj7ofbY4OkVdg5hB_v_kx6-72-Ybr4B" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={chatapp} alt=""/>
          </li>
          <li>
            <h2>qm-lab app</h2>
            <h6>
            a twelve-man project that involved designing, testing, and building a collaborative modelling platform for users to generate
            diagrams of various systems. The project was developed with the spiral software development methodology and had our
            team split up into 3 groups (design, programming, and testing). each group had separate leaders, controlling the workflow
            of their respective group. the application itself was developed in google app engine, for real time interactions, along with
            jointjs, backbonejs, css, and html. testing (unit, spike, smoke, functional) was done with selenium. my role in the
            project was mainly with the design team, where i developed uml diagrams, presentations, documentation, and user
            manuals. however, it should be noted that each member of our team had some time working within each other group. the
            product ended up being a real-time modelling application that was very similar to draw.io. to see the product, please click:&nbsp;
            <a href="https://github.com/ShaneWilliamson/QM-Lab" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={qmlab} alt=""/>
          </li>
          <li>
            <h2>robot fighting simulator</h2>
            <h6>
            a five man project build in java with the guidelines of the waterfall software development method. the game, in a nutshell,
            allowed users to choose teams of robots whom fought one another using a turn-based format - on a hex grid map. the
            robots were written in Forth, a stack based language, and had to be translated by an interpreter in order to function in the
            game. my major role within this project involved mainly around creation of our robot scripts, and the functions within the
            robot. as an added note, it was mentioned that we were one of the only groups that produced a working product. unfortunately,
            the project was hosted in the usask gitlab, so the code is long lost. if you wish to see our documentation however, please click:&nbsp;
            <a href="https://drive.google.com/drive/folders/1MQnDt-api9aO7tMFhPOBMSdM5gS9zfJK" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={stackwars} alt=""/>
          </li>
          <li>
            <h2>phonenanza hci</h2>
            <h6>
            as per my Human Computer Interactions class i, along with three fellow colleagues,  were given the task of designing and prototyping a hci design
            challenge which either had to be a upgraded version of a current design (website, app, console) or a new innovative idea that sought to tackle a real
            life problem. together, my group decided on designing a solution to a problem we each faced, picking out out a phone and plan best fit for us in a relatively
            convenient amount of time. with that unified idea in mind, we developed a innovative, mobile friendly layout that catered to both tech savvy and inexperienced users.
            the designed incorporated the option to select a phone, a plan, or the combination together. it would track your current location with permissions and offered a
            questionnaire to new or indecisive users. In the end, you were to email a copy of your selection to yourself (and potentially purchase it, but that was not implemented
            as of the prototype). to see the documentation and prototype, please click:&nbsp;
            <a href="https://drive.google.com/drive/folders/1JBeUoUMRcqtB63cxI1bUyzvKapzpjdRg" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={phonenanza} alt=""/>
          </li>
          <li>
            <h2>cyberblitz arena fighter</h2>
            <h6>
            for game jam february 2016, our group created the game cyberblitz, a 2d arena fighter based game - similar to smash bros.
            the game was created using unity c# and gathered from our previous game jam experience. we recruited additional members
            since last, such as a sprite artist, which allowed the program to be developed efficiently. The game itself served up to four players,
            which each controlled a unit that had a class associated to it. each class had their own special abilities and weaknesses in correlation to other
            classes, increasing the complexity of the game immensely. notably, the game also had controller support. most of my time allocated towards
            the project was with the gui development, page flow, bug fixing, testing, balancing, and implementing our heuristic for proper game start / completion.
            to see the project in git, please click:&nbsp;
            <a href="https://github.com/KillerGiraffeStudios/GameJam" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={gamejam2016} alt=""/>
          </li>
          <li>
            <h2>phage</h2>
            <h6>
            a game build with unity c# along with three other group member within the time constraint of 48 hours for game jam 2015.
            the game played out similarly to agar.io, only with the exception of upgrades, rounds, and implementation of cpus. my major role in the
            project was with the gui design (along with some minor work in the game logic and interaction). For an added note, all of our developers
            had little to no experience with game development when building this project. our team ended up getting 2nd place for best theme.
            to see our game in action on the game jam website, please click:&nbsp;
            <a href="http://gamewithus.ca/games/?gameID=56" target="_blank" rel="noopener noreferrer"><span><strong>here</strong></span></a>
            </h6>
            <img src={gamejam2015} alt=""/>
          </li>
        </ul>
      </div>
      );
    }
}

export default Portfolio