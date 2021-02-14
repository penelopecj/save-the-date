import React from 'react'
import { Link } from 'react-router-dom'

import rings from '../images/rings.jpg'

function Nav() {
  return (
    <header>
      <nav>
        <Link className="logo-wrapper">
          <p>P</p>
          <p className="plus">&amp;</p>
          <p>Z</p>
          {/* <p></p>
          <p> 1<span className="rouge-script">0 jul</span> 22</p> */}
          <img className="logo" src={rings} alt="rings logo"/>
        </Link>
        <ul className="top-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/venue">Venue</Link>
          </li>
          <li>
            <Link to="/registry">Registry</Link>
          </li>
          <li>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Nav