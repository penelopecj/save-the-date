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
        <p className="centered">The hotel is located about <strong>20 minutes</strong> drive from the wedding venue. See below details about hotel transport.</p>
        <p className="centered">A private farewell breakfast will be served on on Monday 11th July from 10:00am to 12:00pm. Please let us know if you book a room so we can provide enough breakfast for you.</p>
        <hr />
        <h2>Book a Room</h2>
        <p>Many of us are staying at the Marriott Melville the night before the wedding (Saturday 9th July) and the night of the wedding (Sunday 10th July).</p>
        <p>If you think there&apos;s a chance that you will want to stay at the Marriott Melville, we suggest going ahead and making a reservation now, since it can be cancelled up until 3 days before the wedding if you decide not to stay there. There are discounts available for Seniors over 62, for AAA/CAA membership, and for Marriott membership (which you can get for free).</p>
        <p className="bold driving">Reservations can be made here:</p>
        <a href="https://www.marriott.com/hotels/travel/nycml-marriott-melville-long-island/" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
        <p>Click on the &apos;View Rates&apos; button and then the &apos;Edit&apos; button to include the AAA / CAA or Senior Discount &apos;Special Rates&apos;.</p>
        <hr />
        <h2>Hotel Transport</h2>
        <p>We have booked a 56-passenger coach to drive some of you from the hotel to the venue at 5:30pm on Sunday 10th July and back again at the end of the night. Space on the bus is limited, so we encourage you to drive if you will have a car at the hotel.</p>
        <p>The hotel is located in Melville, New York - a bit farther into Long Island than the wedding venue. The nearest train station is Pinelawn on the Ronkonkoma branch of the Long Island Rail Road (LIRR).</p>
        <p>We recommend driving or taking a taxi to the hotel. Otherwise, you can take the Ronkonkoma branch to Pinelawn Station and get a 10-minute Uber from there to the hotel.</p>
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