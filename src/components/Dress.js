import React from 'react'

import suit from '../images/summer-suit.jpg'
import dress from '../images/summer-dress.jpg'

function Dress() {

  return (
    <main>
      <section className="photo-banner">
        <figure className="landscape">
          <img src={suit} alt="Men in summer suits standing by car by Dieter Blom" />
        </figure>
        <figure className="landscape"> 
          <img src={dress} alt="Woman in summer dress and sunglasses throwing peace signs by Hannah Busing" />
        </figure>
      </section>
      <h1 className="centered">What to Wear</h1>
      <section className="travel-banner">
        <h2>Summer Suits and Dresses</h2>
        <p className="centered">This is a classy, formal affair. No shoes, no shirt, no service.</p>
        <p className="centered">We want you to be comfortable, so please dress appropriately for standing outdoors in the July heat.</p>
        <p className="centered">Reference the above models for the vibe.</p>
      </section>
      <br />
    </main>
  )
}

export default Dress