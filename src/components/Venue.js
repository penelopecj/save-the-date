import React from 'react'

import westbury from '../images/westbury.jpg'
import westburyManor from '../images/westbury2.jpg'

function Venue() {

  return (
    <main>
      <section className="photo-banner">
        <figure className="landscape">
          <img src={westbury} alt="mansion with fountain" />
        </figure>
        <figure className="landscape"> 
          <img src={westburyManor} alt="outdoor wedding ceremony arch" />
        </figure>
      </section>
      <h1 className="centered">Westbury Manor</h1>
      <section className="travel-banner">
        <h2>1100 Jericho Turnpike, Westbury, New York 11590, United States</h2>
        <p className="centered">The wedding venue is located about <strong>45 minutes</strong> drive from Manhattan, but please leave extra time for traffic.</p>
        <hr />
        <h2>Arriving by Car</h2>
        <p>The venue is located directly off of Jericho Turnpike coming Northbound from NYC. The turn onto the private driveway will be on your right directly after Rose Avenue. Plenty of parking is available at the venue.</p>
        <p className="bold driving">From Boston:</p>
        <p>Take 90 West to 84 West to 91 South to 15 South towards New York City. Continue to the Hutchinson River Parkway South and take 678 South to the Cross Island Parkway. Exit onto Long Island Expressway/495 East. Take the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold driving">From Queens:</p>
        <p>Take the Long Island Expressway/495 East to Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <p className="bold driving">From Manhattan:</p>
        <p>Take 495 East to the Midtown Tunnel and continue on Long Island Expressway/495 until you reach the Northern State Parkway South. Take Exit 31 for Glen Cove Road/25 North/Jericho Turnpike.</p>
        <hr />
        <h2>Arriving by Train</h2>
        <p>The venue is located in Westbury, New York. The nearest train station is Carle Place on the Long Island Rail Road (LIRR). We recommend taking the Port Jefferson line about 45 minutes from Penn Station (Manhattan) or 30 minutes from Forest Hills (Queens) to Carle Place.</p>
        <p>The venue is a 30-minute walk from the station or a 5-minute Uber ride.</p>
        <hr />
        <h2>Arriving by Plane</h2>
        <p>The venue is located on Long Island, east of New York City. Flights are available to three New York City airports:</p>
        <ul>
          <li>John F. Kennedy International Airport (JFK)</li>
          <li>LaGuardia Airport (LGA)</li>
          <li>Newark Liberty International Airport (EWR)</li>
        </ul>
        <p>JFK and LaGuardia airports are located in Queens, New York and are the closest to the venue. Newark airport is located in New Jersey, which is to the west of Manhattan and much farther from the venue.</p>
        <p>If you will be flying internationally, we recommend booking a direct flight if possible and planning for plenty of time to get through busy US customs (during summer vacation time).</p>
        <hr />
        <h1>Example Menu</h1>
        <h2 className="entree-header centered">Appetizer</h2>
        <ul className="menu">
          <li>
            <p className="bold entree-header">
              Smoked Salmon
            </p>
            <p className="entree-text">
              Gaspe bay smoked salmon nestled in fried Yuba with Enoki mushrooms and tobiko served over a bed of Frisee and field greens topped with a coconut lemongrass vinaigrette
            </p>
          </li>
        </ul>
        <br />
        <h2 className="entree-header centered">Main Entrées</h2>
        <p className="entree-text centered">(Guests&apos; choice)</p>
        <ul className="menu">
          <li>
            <p className="bold entree-header">
              Amaretto Filet Mignon
            </p>
            <p className="entree-text">
              Whole tenderloin of beef with red wine, Amaretto and strawberry glaze
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Chicken Olivata
            </p>
            <p className="entree-text">
              Tender breast of chicken served with tapenade of white wine and imported Italian olives, crowned with coarsely diced tomatoes
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Salmon
            </p>
            <p className="entree-text">
              Filet of salmon, pan roasted in a salmoriglio sauce
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Sea Bass
            </p>
            <p className="entree-text">
              Baked Mediteranean Sea Bass topped with sliced tomato in a garlic shallot white wine sauce
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Pasta Primavera
            </p>
            <p className="entree-text">
              Vegetarian pasta
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              North Fork
            </p>
            <p className="entree-text">
              Grilled Portobello mushrooms, yellow squash, zucchini, asparagus, and red and yellow Holland peppers
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Duck á l&apos; Orange
            </p>
            <p className="entree-text">
              Slowly roasted with apple bread stuffing served with an orange glaze
            </p>
          </li>
          <li>
            <p className="bold entree-header">
              Chicken Fingers
            </p>
            <p className="entree-text">
              Served wtih fries
            </p>
          </li>
        </ul>
        <p>All entrées are served with chef&apos;s selection of potatoes or rice and seasonal vegetable.</p>
      </section>
      <br />
    </main>
  )
}

export default Venue