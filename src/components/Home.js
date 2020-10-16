import React from 'react';
import Header from './Header'
import Menu from './Menu'

const Home = () => {
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
      {/* <Hero /> */}
    </div>
  )
}

export default Home;