import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from 'react-router-dom'
import Readme from './components/Readme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './globals.less'

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />

        <div className="content">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
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
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function NoMatch() {
  let location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
