import React from 'react'

// import {} from '../images/.jpg'

function RSVP() {

  return (
    <main>
      <h3 className="fancy-font">We&apos;d love to see you there...</h3>
      <section className="photo-banner">
        {/* <img className="index-img" src="" alt="" />
        <img className="index-img" src="" alt="" />
        <img className="index-img" src="" alt="" /> */}
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
        <div className="contact">
          <p>Let us know if you have any questions 👰🏻💁🏻‍♂️</p>
          <a href="mailto:pennyzac2@gmail.com" className="email">
            <span className="material-icons">email</span>
            pennyzac2@gmail.com
          </a>
        </div>
        
      </section>
    </main>
  )
}

export default RSVP