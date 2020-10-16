import React from 'react';
import MenuLink from './MenuLink'

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
    <ul>
      {links}
    </ul>
  )
}

export default Nav;