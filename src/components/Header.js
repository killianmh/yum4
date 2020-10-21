import React from 'react';
import {
  Link
} from "react-router-dom";
import '../styles/Header.css';
import Menu from './Menu'

import {useBreakpoint} from '../contextProviders/BreakpointProvider'

const Header = props => {
  const breakpoints = useBreakpoint()
  console.log(breakpoints.desktop)

  const searchActive = props.searchActive

  let headerClass = "header"
  let right
  let links
  if (breakpoints.desktop) {
    headerClass += ' desktop'
    links = [
      {
        path: "/",
        name: "Home"
      },
      {
        path: "/about",
        name: "About"
      },
    ]
    right = 
    <div className="menuCont desktop">
      <Menu links={links} />
      <button className="btn alt">Login</button>
    </div>
  } else {
    links = [
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
    right = <div className="menuCont">
              <button className="btn alt">Login</button>
              <Menu links={links} />
            </div>
  }
  return (
    <div className={headerClass}>
      <div className="container">
        <div className="title">
          Yum
        </div>
        {right}
      </div>
    </div>
  )
}

export default Header