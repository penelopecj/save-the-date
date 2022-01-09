import React from 'react'

import timesSquare from '../images/times-square.jpg'
import barcaCantina from '../images/la-barca-cantina.jpg'

function Nyc() {

  return (
    <main>
      <section className="photo-banner">
        <figure className="landscape">
          <img src={timesSquare} alt="Times Square Manhattan" />
        </figure>
        <figure className="landscape">
          <img src={barcaCantina} alt="Brooklyn Bridge at night" />
        </figure>
      </section>
      <h1 className="centered">New York City</h1>
      <section className="travel-banner">
        <h2>Your Guide to the Big Apple</h2>
        <p>Many of you have asked us why we chose New York to celebrate our special day. Staten Island was Penny&apos;s home for four years during university, while Brooklyn and Queens have been home to Penny&apos;s family for generations. Penny has always loved the City and Zac has always hated it, but nevertheless we have made many a pilgrimage over the years and it has become a special place for us both.</p>
        <p className="centered">Whether it&apos;s your 1st or your 101st time in New York, NY, we have written a little guide for our favourite things to do and see in the city that never sleeps!</p>
        <hr />
        <h2>Top of the Rock</h2>
        <p>It&apos;s very common to want to see the Empire State Building when you visit NYC; but what not everyone will realise is that you can actually see the Empire State Building itself if you take a trip to the top of Rockefeller Center on East 50th Street between 5th and 6th Avenue. Rockefeller Center is an iconic New York City landmark in its own right with lots of things to do in the surrounding plaza. It&apos;s cheaper admission at $40 than the Empire State Building at $77, with shorter queues and better views!</p>
        <a href="https://www.topoftherocknyc.com/ticket-menu/" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            Buy Tickets
          </button>
        </a>
        <p>After you have perused all Rockerfeller Plaza has to offer, you can take a stroll down 5th Ave to see some of the most expensive stores on planet earth all in one place! Typically makes for excellent window shopping.</p>
        <hr />
        <h2>Statue of Liberty for FREE</h2>
        <p>No trip to New York is complete without marvelling at the graceful sillouette of our Lady Liberty, gifted to the Americans by the French in 1886. The Statue is seen as a symbol of freedom and new beginnings to many who emmigrated to the US through Ellis Island over the years, including my family. There are many tours available to visit Ellis Island and Liberty Island by boat, but what not everyone realises is that you can see the Statue of Liberty for free from the Staten Island Ferry - used daily by the commuters of the City.</p>
        <p>The ferry is located in Lower Manhattan, south of Wall Street. Take the 1 or R train to Whitehall St/South Ferry. You will see the Whitehall Terminal in front of you when you exit.</p>
        <p>Alternatively, you can take the 4/5/6 train to Bowling Green Station and walk south for about 5 minutes to the ferry terminal.</p>
        <p>The ferry runs about once every half an hour, and there are lots of fast food places in the terminal to try while you are waiting.</p>
        <p>When you go to board the ferry, make sure you head for the starboard (right) side of the upper deck of the boat. Just follow the other tourists if you are not sure where to go. You will see the statue after about 5-10 minutes.</p>
        <p>On your way back, make sure you head to the port (left) side of the upper deck, so you can see her again.</p>
        <hr />
        <h2>Central Park</h2>
        <p>We believe Central Park is one of the most beautiful places in the city and you can spend hours just walking around the greenery. We recommend walking from South to North, to see some of the more recognisable landmarks on your way up, such as the Widow&apos;s Walk and the Bethesda Fountain. Central Park is open all day, and obviously is free. There is also the Central Park Zoo, but it is inferior to the Bronx Zoo, and admission is $20.</p>
        <hr />
        <h2>The High Line</h2>
        <p>Open from 7am to 7pm, the High Line is another great, free, public, open-air space in Manhattan. The High Line was first built in the mid 1800s and used to be a working railroad. It has a long and fascinating history. Try to enter on one end and walk along the entire path to get the most out of your visit. Zac particularly enjoys peering into the very expensive real estate along the elevated walkway.</p>
        <p>Visit the website for directions and more info.</p>
        <a href="https://www.thehighline.org/history/" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            History
          </button>
        </a>
        <a href="https://www.thehighline.org/visit/" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            Directions
          </button>
        </a>
        <hr />
        <h2>Patzeria</h2>
        <p>New York pizza is the best pizza in the world, and your visit would not be complete without burning the roof of your mouth on a giant and delicious $2 slice. Patzeria is one of our favourite pizzerias in the City and conveniently located in Times Square across the street from Hamilton. It can be found on West 46th Street, between 7th and 8th Ave, and directly next to the Church of Scientology. No seating available.</p>
      </section>
      <br />
    </main>
  )
}

export default Nyc