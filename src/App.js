import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Dashboard from './components/Dashboard'
import NoMatch from './components/NoMatch'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'

import {BreakpointProvider} from './contextProviders/BreakpointProvider'

import './styles/App.css'

const mediaQueries = {
  desktop: '(min-width: 1025px)'
}


const App = props => {
  let fakeAuth = {
    isAuthenticated: false
  }

  return (
    <BreakpointProvider mediaQueries = {mediaQueries}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/recipes">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </BreakpointProvider>
  );
}

export default App;
