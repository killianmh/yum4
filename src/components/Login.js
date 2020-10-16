import React from 'react';
import Header from './Header'
import Menu from './Menu'

const Login = () => {
  const links = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/login",
      name: "Login"
    },
    {
      path: "/about",
      name: "About"
    },
  ]
  return(
    <div>
      <Header>
        <Menu links={links} />
      </Header>
      Login
    </div>
  )
}

export default Login;