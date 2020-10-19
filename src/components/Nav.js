import React from 'react';
import MenuLink from './MenuLink'
import '../styles/Nav.css';

import {useBreakpoint} from '../contextProviders/BreakpointProvider'

const Nav = props => {
  const breakpoints = useBreakpoint()
  console.log(breakpoints.desktop)
  let button
  let navClass = "nav"
  let ulClass = "navUl"
  if (!breakpoints.desktop) {
    button = <button className="closeMenu"><i className="fas fa-times"></i> </button>
  } else {
    navClass += ' desktop'
    ulClass += ' desktop'
  }
  const links = []
  props.links.forEach((link) => {
    links.push(
      <MenuLink
        link={link.path}
        name={link.name}
        key={link.name}
        modalLink={link.modalLink} />
    )
  })
  return(
    <div className={navClass}>
      {button}
      <ul className={ulClass}>
        {links}
      </ul>
    </div>
  )
}

export default Nav;