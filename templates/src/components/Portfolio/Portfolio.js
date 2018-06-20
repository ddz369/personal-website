import React from 'react'
import './style.css'

import chatapp from '../../images/chatapp.png'
import lynkcoin from '../../images/lynkcoin.png'
import stackwars from '../../images/stackwars.png'
import phonenanza from '../../images/phonenanza.png'
import qmlab from '../../images/qmlab.png'
import videoroulette from '../../images/videoroulette.png'
import gamejam2015 from '../../images/gamejam2015.png'
import gamejam2016 from '../../images/gamejam2016.png'

const Portfolio = () =>
  <div className="portfolio" alt="">
    <ul>
      <li>
        <h2>lynkcoin website</h2>
        <img src={lynkcoin} alt=""/>
      </li>
      <li>
        <h2>qm-lab app</h2>
        <img src={qmlab} alt=""/>
      </li>
      <li>
        <h2>videoroulette</h2>
        <img src={videoroulette} alt=""/>
      </li>
      <li>
        <h2>phonenanza HCI</h2>
        <img src={phonenanza} alt=""/>
      </li>
      <li>
        <h2>robot fighting simulator</h2>
        <img src={stackwars} alt=""/>
      </li>
      <li>
        <h2>multi-language chatroom app</h2>
        <img src={chatapp} alt=""/>
      </li>
      <li>
        <h2>phage</h2>
        <img src={gamejam2015} alt=""/>
      </li>
      <li>
      <h2>arena fighter</h2>
      <img src={gamejam2016} alt=""/>
      </li>
    </ul>
  </div>

export default Portfolio