import React from 'react';
import Nav from "./Nav"
import '../styles/Menu.css';

import {useBreakpoint} from '../contextProviders/BreakpointProvider'


const Menu = props => {
  const breakpoints = useBreakpoint()
  console.log(breakpoints.desktop)
  let button
  if (!breakpoints.desktop) {
    button = <button className="openMenu"><i className="fas fa-bars"></i> </button>
  }
  return(
    <div className="menu">
      {button}
      <Nav links={props.links} />
    </div>
  )
}

export default Menu;