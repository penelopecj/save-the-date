import React from 'react'

import engaged from '../images/engaged.jpg'
//import shifen from '../images/shifen2.jpg'
//import bangkok from '../images/bangkok.jpg'
import buckinghamPalace from '../images/buckingham-palace.jpg'
import waterfall from '../images/waterfall.jpg'



function Home() {

  // Set the date we're counting down to
  const [days, setDays] = React.useState(null)
  const [hours, setHours] = React.useState(null)
  const [minutes, setMinutes] = React.useState(null)
  const [seconds, setSeconds] = React.useState(null)
  const countDownDate = new Date('July 10, 2022 18:00:00 EDT').getTime()

  // Update the count down every 1 second
  const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the count down date
    const distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result in the JSX 
    // setCountDown(days + ' days, ' + hours + ' hours, '
    // + minutes + ' minutes, and ' + seconds + ' seconds') <-- All in one line, not mobile responsive
    setDays(days + ' days')
    setHours(hours + ' hours')
    setMinutes(minutes + ' minutes')
    setSeconds(seconds + ' seconds')

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      setDays('MAZEL TOV!!!')
      setHours('')
      setMinutes('')
      setSeconds('')
    }
  }, 1000)

  return (
    <main>
      <section className='title-banner'>
        <h3 className='fancy-font'>You&apos;re invited...</h3>
      </section>
      <section className='photo-banner'>
        <figure className="portrait">
          <img src={waterfall} alt='Penny and Zac in front of waterfall' />
        </figure>
        <figure className="portrait">
          <img src={engaged} alt='Penny and Zac with engagement ring' />
        </figure>
        <figure className="portrait vanish">
          <img src={buckinghamPalace} alt='Penny and Zac in front of Buckingham Palace' />
        </figure>
      </section>
      <section className='title-banner'>
        <h3>to the wedding of</h3>
        <h1 className="penny-and-zac"><div className="penny">Penelope Jungreis</div> <div className="penny">&amp;</div> <div className="zac"> Zachary Collins</div></h1>
        <h2 className="date">Sunday 10<span className="superscript">th</span> July 2022</h2>
        <h4>Westbury Manor in New York</h4>
      </section>

      <section className="countdown-banner open-sans bold">
        {days && hours && minutes && seconds ? 
          <article>
            <div>Ceremony begins in </div>
            <div>
              {days}
              <span className="countdown-punctuation">, </span>
            </div>
            <div>
              {hours}
              <span className="countdown-punctuation">, </span>
            </div>
            <div>
              {minutes}
              <span className="countdown-punctuation">, and </span>
            </div>
            <div>
              {seconds}
              <span className="countdown-punctuation"></span>
            </div>
          </article>
          :
          <div></div>
        }
      </section>
      <section className='title-banner'>
        {/* <h2 className="penny">Schedule</h2> */}
        <div className="timing">
          <div className="rouge-script">Arrival</div>
          <div>18:00</div>
        </div>
        <div className="timing">
          <div className="rouge-script">Ceremony</div>
          <div>18:30</div>
        </div>
        <div className="timing">
          <div className="rouge-script">Cocktails</div>
          <div>19:00</div>
        </div>
        <div className="timing">
          <div className="rouge-script">Dinner</div>
          <div>20:00</div>
        </div>
        <div className="timing">
          <div className="rouge-script">Cake</div>
          <div>22:00</div>
        </div>
        <h3 id='late'>See you there!</h3>
      </section>
    </main>
  )
}

export default Home