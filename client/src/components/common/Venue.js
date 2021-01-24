import React from 'react'

import westbury from '../../images/westbury.jpg'
import westburyManor from '../../images/westbury2.jpg'
import timesSquare from '../../images/nyc2.jpg'
import brooklynBridge from '../../images/nyc3.jpg'

function Venue() {

  return (
    <main>
      <section className="photo-banner">
        <img className="reg-img" src={westbury} alt="mansion with fountain" />
        <img className="reg-img" src={westburyManor} alt="outdoor wedding ceremony arch" />
      </section>
      <section className="travel-banner">
        <h1>Westbury Manor</h1>
        <h2>1100 Jericho Turnpike, Westbury, NY 11590, United States</h2>
        <p>Keep an eye on this section for details about a <strong>private coach</strong> from Manhattan! Timing and location TBC.</p>
        <hr />
        <h2>Arriving by Car</h2>
        <p>The venue is located directly off of Jericho Turnpike coming Northbound from NYC. The turn onto the private driveway will be on your right directly after Rose Avenue. Plenty of parking is available at the venue.</p>
        <p className="bold">From Boston:</p>
        <p>Take 90 West to 84 West to 91 South to 15 South towards New York City. Continue to the Hutchinson River Parkway South and take 678 South to the Cross Island Parkway. Exit onto Long Island Expressway/495 East. Take the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold">From Queens:</p>
        <p>Take the Long Island Expressway/495 East to Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold">From Manhattan:</p>
        <p>Take 495 East to the Midtown Tunnel and continue on Long Island Expressway/495 until you reach the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <hr />
        <h2>Arriving by Train</h2>
        <p>The venue is located in Westbury, New York. The nearest train station is Carle Place on the Long Island Rail Road (LIRR). We recommend taking the Port Jefferson line about 45 minutes from Penn Station (Manhattan) or 30 minutes Forest Hills (Queens) to Carle Place.</p>
        <p>The venue is about a 30-minute walk from the station or a 5-minute Uber ride.</p>
        <hr />
        <h2>Arriving by Plane</h2>
        <p>The venue is located on Long Island, east of New York City. Flights available to three New York City airports:</p>
        <ul>
          <li>John F. Kennedy International Airport (JFK)</li>
          <li>LaGuardia Airport (LGA)</li>
          <li>Newark Liberty International Airport (EWR)</li>
        </ul>
        <p>JFK and LaGuardia airports are located in Queens, New York and are the closest to the venue. Newark airport is located in New Jersey, to the west of Manhattan on the opposite side to the venue.</p>
        <p>If you will be flying internationally, we recommend booking a direct flight if possible and planning for plenty of time to pass through busy US customs (during summer vacation time).</p>
      </section>
      <section className="photo-banner">
        <img className="reg-img" src={timesSquare} alt="Times Square Manhattan" />
        <img className="reg-img" src={brooklynBridge} alt="Brooklyn Bridge at night" />
      </section>
      <section className="travel-banner">
        <h2>Where to Stay</h2>
        <p className="bold">In Westbury, New York:</p>
        <section className="hotel">
          <p><strong>Hyatt Place Garden City</strong></p>
          <p>(516) 222-6277</p>
          <p><a className="zac" href="www.gardencity.place.hyatt.com">www.gardencity.place.hyatt.com</a></p>
        </section>
        <section className="hotel">
          <p><strong>Courtyard Marriott Westbury</strong></p>
          <p>(516) 542-1001</p>
          <p><a className="zac" href="www.marriott.com/nycbl">www.marriott.com/nycbl</a></p>
        </section>
        <section className="hotel">
          <p><strong>Viana Hotel and Spa, Westbury</strong></p>
          <p>(516) 338-7777</p>
          <p><a className="zac" href="www.vianahotelandspa.com">www.vianahotelandspa.com</a></p>
        </section>
        <p className="bold">In Queens, New York:</p>
        <p>Coming soon...</p>
        <p className="bold">In Manhattan, New York:</p>
        <p>Coming soon...</p>
      </section>
    </main>
  )
}

export default Venue