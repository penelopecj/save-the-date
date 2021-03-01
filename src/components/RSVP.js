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
        <h2 className="date open-sans orchid">Sunday 10<span className="superscript big">th</span> July 2022</h2>
        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3ZzOTZuaXBudTQ5dXQwZWgybzBrZDU5c2ogcGVubnl6YWMyQG0&amp;tmsrc=pennyzac2%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" alt="Google calendar button" className="google-btn" /></a>
        <h4 className="fancy-font">More details coming soon.</h4>
      </section>
    </main>
  )
}

export default RSVP