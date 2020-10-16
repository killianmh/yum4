import React from 'react';
import Header from './Header'
import Menu from './Menu'

const About = () => {
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
      About
    </div>
  )
}

export default About;