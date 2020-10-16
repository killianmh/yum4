import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false
}

const PrivateRoute = ({ children, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props => ( 
        fakeAuth.isAuthenticated
          ? (children)
          : (
            <Redirect
              to={{
                pathname: "/login",
                state: {from: props.location}
              }}
            />
          )
      )}
    />
  )
}

export default PrivateRoute;