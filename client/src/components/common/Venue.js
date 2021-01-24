import React from 'react'

function Venue() {

  return (
    <main>
      <section className="photo-banner">
        <img className="reg-img" src="images/westbury.jpg" alt="mansion with fountain" />
        <img className="reg-img" src="images/westbury2.jpg" alt="outdoor wedding ceremony arch" />
      </section>
      <section className="travel-banner">
        <h3>How to get to...</h3>
        <h1>Westbury Manor</h1>
        <h2>1100 Jericho Turnpike, Westbury, NY 11590, United States</h2>
        <h2>By Car</h2>
        <p>The venue is located directly off of Jericho Turnpike coming Northbound from NYC. The turn onto the private driveway will be on your right directly after Rose Avenue. Plenty of parking is available at the venue.</p>
        <p className="bold">From Boston:</p>
        <p>Take 90 West to 84 West to 91 South to 15 South towards New York City. Continue to the Hutchinson River Parkway South and take 678 South to the Cross Island Parkway. Exit onto Long Island Expressway/495 East. Take the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold">From Queens:</p>
        <p>Take the Long Island Expressway/495 East to Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold">From Manhattan:</p>
        <p>Take 495 East to the Midtown Tunnel and continue on Long Island Expressway/495 until you reach the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <h2>By Train</h2>
        <p>The venue is located in Westbury, New York. The nearest train station is Carle Place on the Long Island Rail Road (LIRR). We recommend taking the Port Jefferson line about 45 minutes from Penn Station (Manhattan) or 30 minutes Forest Hills (Queens) to Carle Place.</p>
        <p>The venue is about a 30-minute walk from the station or a 5-minute Uber ride.</p>
        <h2>By Plane</h2>
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
        <img className="reg-img" src="images/nyc3.jpg" alt="Times Square Manhattan" />
        <img className="reg-img" src="images/nyc2.jpg" alt="Brooklyn Bridge at night" />
      </section>
      <section className="travel-banner">
        <h3>Where to stay in...</h3>
        <h1>New York</h1>
        <h2>Westbury</h2>
        <p>Coming soon...</p>
        <h2>Queens</h2>
        <p>Coming soon...</p>
        <h2>Manhattan</h2>
        <p>Coming soon...</p>
      </section>
    </main>
  )
}

export default Venue