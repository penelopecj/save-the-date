import React from 'react'

import collins from '../images/collins.jpg'
import jungreis from '../images/jungreis.jpg'

function Registry() {

  return (
    <main>
      <h3 className="fancy-font">The best present is your presence...</h3>
      <section className="photo-banner">
        <img className="reg-img" src={collins} alt="four people at dinner" />
        <img className="reg-img" src={jungreis} alt="group family photo with buddha" />
      </section>
      <section className="title-banner">
        <h3>But if you insist...</h3>
        <h1>Wedding Registry</h1>
        <h2 className="fancy-font">Details coming soon.</h2>
        <h4></h4>
      </section>
    </main>
  )
}

export default Registry