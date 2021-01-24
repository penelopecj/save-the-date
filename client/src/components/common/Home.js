import React from 'react'

import engaged from '../../images/engaged.jpg'
import shifen from '../../images/shifen2.jpg'
import bangkok from '../../images/bangkok.jpg'


function Home() {

  // Set the date we're counting down to
  const [countDown, setCountDown] = React.useState(null)
  //document.querySelector('#countdown')
  const countDownDate = new Date('July 10, 2022 18:30:00').getTime()

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

    // Display the result in the element with id='demo'
    //countDown.innerHTML = 
    setCountDown(days + ' days, ' + hours + ' hours, '
    + minutes + ' minutes, and ' + seconds + ' seconds')

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      //countDown.innerHTML = 
      setCountDown('MAZEL TOV!!!')
    }
  }, 1000)

  return (
    <main>
      <section className='title-banner'>
        <h3 className='invited'>You&apos;re invited...</h3>
      </section>
      <section className='photo-banner'>
        <img className='index-img' src={engaged} alt='man and woman with engagement ring' />
        <img className='index-img' src={shifen} alt='couple kissing on train tracks' />
        <img className='index-img' src={bangkok}alt='couple smiling with view behind' />
      </section>
      <section className='title-banner'>
        <h3>to the wedding of</h3>
        <h1>Penelope Jungreis <span className="black">&amp;</span> <span className="zac"> Zachary Collins</span></h1>
        <h2 className='date'>Sunday 10<span className='superscript'>th</span> July 2022</h2>
        <h4>Westbury Manor in New York</h4>
      </section>

      <section className='countdown-banner'>
        {countDown ? 
          <h2>Ceremony begins in <span id='countdown'>{countDown}</span></h2>
          :
          <h2></h2>
        }
        <h3 id='late'>Don&apos;t be late!</h3>
      </section>
    </main>
  )
}

export default Home