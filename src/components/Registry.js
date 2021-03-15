import React from 'react'

import collins from '../images/collins.jpg'
import jungreis from '../images/jungreis.jpg'

function Registry() {

  return (
    <main>
      {/* <h3 className="fancy-font">The best present is your presence...</h3> */}
      <section className="photo-banner">
        <figure className="landscape">
          <img src={collins} alt="four people at dinner" />
        </figure>
        <figure className="landscape">
          <img src={jungreis} alt="group family photo with buddha" />
        </figure>
      </section>
      <section className="title-banner">
        {/* <h3>But if you insist...</h3> */}
        <h1>Wedding Registry</h1>
        <h2>Details coming soon.</h2>
        <h4></h4>
      </section>
    </main>
  )
}

export default Registry