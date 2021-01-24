import React from 'react'

function Home() {

  return (
    <main>
      <h3>You&apos;re invited...</h3>
      <section className="photo-banner">
        <img className="index-img" src="images/engaged.jpg" alt="man and woman with engagement ring" />
        <img className="index-img" src="images/shifen2.jpg" alt="couple kissing on train tracks" />
        <img className="index-img" src="images/bangkok.jpg" alt="couple smiling with view behind" />
      </section>
      <section className="title-banner">
        <h3>to the wedding of</h3>
        <h1>Penelope Jungreis & Zachary Collins</h1>
        <h2 className="date">Sunday 10<span className="superscript">th</span> July 2022</h2>
        <h4>Westbury Manor in New York</h4>
      </section>

      <section className="countdown-banner">
        <h2>Ceremony begins in <span id="countdown"></span></h2>
        <h3 id="late">Don&apos;t be late!</h3>
      </section>
    </main>
  )
}

export default Home