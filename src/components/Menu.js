import React from 'react';
import Nav from "./Nav"
import '../styles/Menu.css';


const Menu = props => {
  return(
    <div>
      <button className="openMenu"><i className="fas fa-bars"></i> </button>
      <Nav links={props.links}/>
    </div>
  )
}

export default Menu;