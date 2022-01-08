import React from 'react'

function Covid() {

  return (
    <main>
      <h1 className="centered">🦠 Covid 19 🦠</h1>
      <section className="travel-banner">
        <h2>Testing, Masks, and Vaccinations*</h2>
        <p className="centered bold">*Subject to Change</p>
        <p>We really hoped this would no longer be a topic of discussion by the time our special day rolled around, but unfortunately we expect some precautions will still need to be taken this summer. We hope it will be a beautiful, sunny day, which will allow us to hold much of the event outdoors.</p>
        <p>We have outlined below the current plan for measures that will be taken to reduce the spread of Covid 19 at our wedding ceremony and reception. All plans and restrictions subject to change, as you surely know by now.</p>
        <hr />
        <h2>Testing</h2>
        <p>We expect to require a rapid lateral flow COVID-19 antigen test to be taken on the day of the wedding right before traveling to the wedding venue. We recommend pre-purchasing your tests while stock is available, so that buying and taking the test on the day will not impede your partying time with us. However, if you are not able to get one in time, we will try to have a small number of tests available at the door, so you will not have to be sent home without any cake.</p>
        <p className="bold driving">Lateral flow tests can be purchased here:</p>
        <a href="https://www.walmart.com/ip/BinaxNOW-COVID-19-Antigen-Self-Test-2-Count/142089281" target="_blank" rel="noreferrer">
          <button className="booking-btn">
            Buy Test
          </button>
        </a>
        <hr />
        <h2>Masks and Vaccinations</h2>
        <p>We will not be asking our guests to wear a mask for any part of the wedding, nor requiring that they be vaccinated; however, we can&apos;t control what government requirements might be in effect in July. Current New York State rules require all venues to either require ALL guests to be fully vaccinated against COVID-19 or require ALL guests to wear masks indoors, with the venue deciding which of the two requirements to impose. That policy is set to expire soon, but if it is extended through July, we don&apos;t known whether Westbury Manor will require vaccination or mask wearing.</p>
        <p>Although the wedding venue is outside of New York City, anyone planning on site-seeing should be aware that New York City currently has much stricter rules than New York State: requiring proof of full vaccination at restaurants and most indoor entertainment spaces, and requiring unvaccinated individuals to wear masks in all public spaces, even outdoors. </p>
        <p>We will update this section if the rules change.</p>
        <hr />
        <p>For any complaints, discussion, or contentious politcal debate on these topics, please contact Irwin Jungreis on <a href="mailto:iljungr@csail.mit.edu">iljungr@csail.mit.edu</a>. We want nothing to do with it.</p>
      </section>
    </main>
  )
}

export default Covid

