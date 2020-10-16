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


const App = props => {
  return (
    <Router>
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
  );
}

export default App;
