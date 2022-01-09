import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Venue from './components/Venue'
import Hotel from './components/Hotel'
import Nyc from './components/Nyc'
import Covid from './components/Covid'
import Registry from './components/Registry'
import Dress from './components/Dress'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/venue" component={Venue} />
        <Route exact path="/hotel" component={Hotel} />
        <Route exact path="/nyc" component={Nyc} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/dress-code" component={Dress} />
        <Route exact path="/rsvp" component={RSVP} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
    
}

export default App
