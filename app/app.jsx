import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import Readme from './components/Readme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.less'

export default function App() {
  return (
    <div>
      <Navigation />

      <div className="content" data-testid="content">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Readme />
          </Route>
          <Route exact path="/index.html">
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  )
}

function About() {
  return <h2>About us...</h2>
}

function NoMatch() {
  let location = useLocation()

  return (
    <div>
      <h3 data-testid="content-headline">
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
