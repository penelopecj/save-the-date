import React from 'react'

import { Link } from 'react-router-dom'

import marthasVineyard from '../images/marthas-vineyard.jpg'
import afternoonTea from '../images/afternoon-tea.jpg'
import venmo from '../images/venmo.png'

function FAQ() {

  return (
    <main>
      <h3 className="fancy-font">We&apos;d love to see you there...</h3>
      <section className="photo-banner">
        <figure className="landscape">
          <img className="index-img" src={marthasVineyard} alt="penny, zac, calvin, june, and irwin on bow of a ship" />
        </figure>
        <figure className="landscape">
          <img className="index-img" src={afternoonTea} alt="Penny, Melissa, and Chandler on a boat" />
        </figure>
      </section>
      <section className="title-banner">
        <h3>Please save the date</h3>
        <h2 className="date open-sans orchid save-the-date">Sunday 10<span className="superscript">th</span> July 2022</h2>
        <div className="btns-wrapper">
          <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3ZzOTZuaXBudTQ5dXQwZWgybzBrZDU5c2ogcGVubnl6YWMyQG0&amp;tmsrc=pennyzac2%40gmail.com">
            <button className="booking-btn">Add to Calendar</button>
          </a>
          <a href="https://withjoy.com/penny-and-zac/rsvp" target="_blank" rel="noreferrer">
            <button className="booking-btn">RSVP</button>
          </a>
        </div>
        <br />
        <section className="travel-banner">
          <h3>FAQ</h3>
          <ul className="menu">
            <li>
              <strong>
                Do we have a gift registry?
              </strong>
              <p>
                We have decided not to make a wedding gift registry, as we only live in a small flat and don&apos;t have much space. However, as you have been generously requesting to send gifts, we have come up with a few ways below to accept contributions in US Dollars or GB Pounds towards our future home.
              </p>
              <p className="bold entree-header">
                Please make all checks/cheques payable to:
              </p>
              <p className="entree-header entree-text">
                Penelope Jungreis
              </p>
              <p className="bold entree-header">
                Bank transfer (GBP):
              </p>
              <p className="entree-header entree-text">
                Account Holder: Penelope Chin Jungreis
              </p>
              <p className="entree-header entree-text">
                Sort Code: 23-14-70
              </p>
              <p className="entree-header entree-text">
                Account Number: 23996029
              </p>
              <p className="bold entree-header">
                Venmo (USD):
              </p>
              <p className="entree-header entree-text">
                @Penelope-Jungreis
              </p>
              <figure className="venmo-wrapper">
                <img src={venmo} />
              </figure>
              <br />
            </li>
            <li>
              <strong>
                How will we get from the hotel to the wedding venue?
              </strong>
              <p>
                We have booked a 56-passenger coach to drive some of you from the hotel to the venue at 5:30pm on Sunday 10th July and back again at the end of the night. Space on the bus is limited, so we encourage you to drive if you will have a car at the hotel.
              </p>
            </li>
            <li>
              <strong>
                Will we have breakfast all together at the hotel before we leave?
              </strong>
              <p>A private farewell breakfast will be served on on Monday 11th July from 10:00am to 12:00pm. Please let us know if you book a room so we can provide enough breakfast for you.</p>
            </li>
            <li>
              <strong>
                Where are we staying before the wedding?
              </strong>
              <p>
                Zac and Penny will be staying at the <a rel="noreferrer" target="_blank" href="https://www.hyatt.com/en-US/hotel/new-york/hyatt-place-long-island-city-new-york-city/lgazl">Hyatt Long Island City</a> in the New York City borough of Queens for two days before the wedding.
              </p>
            </li>
            <li>
              <strong>
                Where are we going after the wedding?
              </strong>
              <p>
                Zac and Penny will be leaving after breakfast on Monday 10th July to stay for a few days at the base of Mt Washington in New Hampshire. Phone signal will be poor, so best not to contact us about anything after the wedding...
              </p>
            </li>
            <li>
              <strong>
                What is the food and drink situation?
              </strong>
              <p>
                You will be greeted with food and champagne on arrival. After the ceremony, there will be a cocktail hour with passed hors doeuvres, hot food stations, cold food stations, and lots of vegetarian options. Finally, you will have your order taken for a three-course, sit-down meal. The expected menu can be viewed at the bottom of the <Link to="/venue">venue</Link> page. The entire event is top-shelf open bar.
              </p>
            </li>
            <li>
              <strong>
                What should we wear?
              </strong>
              <p>You can read about what to wear on our <Link to="/dress-code">dress code</Link> page.
              </p>
            </li>
            <li>
              <strong>
                What should we do in New York?
              </strong>
              <p>You can read about some of our favourite things to do on our <Link to="/nyc">what to do in NYC</Link> page.</p>
            </li>
            <li>
              <strong>
                Do I have to take a test before the wedding?
              </strong>
              <p>You can read about our guidelines for Covid on our <Link to="/covid">Covid-19</Link> page.</p>
            </li>
          </ul>
        </section>
        <br />
        <div className="contact">
          <p>Let us know if you have any other questions 👰🏻💁🏻‍♂️</p>
          <a href="mailto:pennyzac2@gmail.com" className="email">
            <span className="material-icons">email</span>
            pennyzac2@gmail.com
          </a>
        </div>
        <br />
        <br />
      </section>
    </main>
  )
}

export default FAQ