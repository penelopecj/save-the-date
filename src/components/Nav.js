import React from 'react'
import { Link } from 'react-router-dom'

import rings from '../images/rings.jpg'

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  }
  return (
    <header>
      <nav>
        <Link className="logo-wrapper" to="/"  onClick={handleMenuClose}>
          <p>P</p>
          <p className="plus">&amp;</p>
          <p>Z</p>
          <img className="logo" src={rings} alt="rings logo"/>
        </Link>
        <ul className={isOpen ? '' : 'hide-menu'}>
          <li className="mobile-divider">
            <Link to="/" onClick={handleMenuToggle}>Home</Link>
          </li>
          <li className="mobile-divider">
            <Link to="/venue" onClick={handleMenuToggle}>Venue</Link>
          </li>
          <li className="mobile-divider">
            <Link to="/hotel" onClick={handleMenuToggle}>Hotel</Link>
          </li>
          <li className="mobile-divider">
            <Link to="/covid" onClick={handleMenuToggle}>Covid</Link>
          </li>
          <li className="mobile-divider">
            <Link to="/rsvp" onClick={handleMenuToggle}>Date</Link>
          </li>
        </ul> 
        <div 
          onClick={handleMenuToggle} 
          className={`toggle-btn ${isOpen ? 'close-btn' : 'open-btn'}`}
        >
          <div className="line-one">|</div>
          <div className="line-two">|</div>
          <div className="line-three">|</div>
        </div>
      </nav>
    </header>

  )
}

export default Nav