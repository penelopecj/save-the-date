import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import Venue from './components/common/Venue'
import Registry from './components/common/Registry'
import RSVP from './components/common/RSVP'
// import Register from './components/auth/Register'
// import Login from './components/auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/venue" component={Venue} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/rsvp" component={RSVP} />
      </Switch>
    </BrowserRouter>
  )
    
}

export default App
