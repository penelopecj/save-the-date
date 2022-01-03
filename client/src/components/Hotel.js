import React from 'react'

import room from '../images/melville-room.jpg'
import pool from '../images/melville-pool.jpg'
import reception from '../images/melville-reception.jpg'
import lounge from '../images/melville-lounge.jpg'

function Hotel() {

  return (
    <main>
      <section className="photo-banner">
        <figure className="landscape">
          <img src={room} alt="Hotel room bed" />
        </figure>
        <figure className="landscape"> 
          <img src={pool} alt="Hotel pool" />
        </figure>
      </section>
      <h1 className="centered">Marriott Melville</h1>
      <section className="travel-banner">
        <h2>1350 Walt Whitman Road, Melville, New York 11747, United States</h2>
        <p className="centered">The hotel is located about <strong>20 minutes</strong> drive from the wedding venue.</p>
        <p className="centered">Let us know if you book a room and whether you would be interested in <strong>group transportation</strong> from the hotel to the venue.</p>
        <hr />
        <h2>Book a Room</h2>
        <p>We are staying at the Marriott Melville the night before the wedding (Saturday 9th July) and the night of the wedding (Sunday 10th July). We hope to arrange a group transportation option from the hotel to the wedding venue and back on Sunday 10th July.</p>
        <p>If you think there&apos;s a chance that you will want to stay at the Marriott Melville, we suggest going ahead and making a reservation, since it can be cancelled up until 3 days before the wedding if you decide not to stay there. There are discounts available for those over 62, for AAA/CAA membership, and for Marriott membership (which you can get for free).</p>
        <p className="bold driving">Reservations can be made here:</p>
        <a href="https://www.marriott.com/hotels/travel/nycml-marriott-melville-long-island/" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
        <p> Pick the &apos;Edit&apos; button in the upper right to get the AAA/CAA and senior discount options.</p>
        <hr />
        <h2>Hotel Transport</h2>
        <p>The hotel is located in Melville, New York - a bit farther into Long Island than the wedding venue. The nearest train station is Pinelawn on the Long Island Rail Road (LIRR).</p>
        <p>We recommend driving or taking a taxi to the hotel. Otherwise, we recommend taking the Ronkonkoma branch to Pinelawn and getting a 10-minute Uber ride from Pinelawn station to the hotel.</p>
        <p>We hope to arrange group transport to and from the venue on Sunday 10th July, so please let us know if you will require transport.</p>
      </section>
      <section className="photo-banner">
        <figure className="landscape">
          <img src={lounge} alt="Hotel lounge area" />
        </figure>
        <figure className="landscape">
          <img src={reception} alt="Hotel reception desk" />
        </figure>
      </section>
      <br />
    </main>
  )
}

export default Hotel