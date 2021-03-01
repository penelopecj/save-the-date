import React from 'react'

function Footer() {

  return (
    <footer>
      <p>Made by Penelope Jungreis &copy; 2021</p>
      <ul>
        <li>
          <a href="https://penelopejungreis.com" target="_blank" rel="noreferrer">
            <i className="material-icons large-icon">laptop</i>
          </a>
        </li>
        <li> 
          <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer">
            <i className="devicon-linkedin-plain big-icon"></i>
          </a>
        </li>
        <li> 
          <a href="https://github.com/penelopecj" target="_blank" rel="noreferrer">
            <i className="devicon-github-plain big-icon"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer