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
        <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3ZzOTZuaXBudTQ5dXQwZWgybzBrZDU5c2ogcGVubnl6YWMyQG0&amp;tmsrc=pennyzac2%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif" alt="Google calendar button" className="google-btn" /></a>
        <h4 className="no-bottom-margin">Please respond via your</h4>
        <h3 className="fancy-font">Email Invitation</h3>
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