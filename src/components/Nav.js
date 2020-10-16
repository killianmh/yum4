import React from 'react';
import MenuLink from './MenuLink'
import '../styles/Nav.css';

const Nav = props => {
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
    <div className="nav">
      <button className="closeMenu"><i className="fas fa-times"></i> </button>
      <ul className="navUl">
        {links}
      </ul>
    </div>
  )
}

export default Nav;