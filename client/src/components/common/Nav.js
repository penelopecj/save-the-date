import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <span role="img" aria-label="logo" className="logo">⚭</span>
      <ul>
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
  )
}

export default Nav