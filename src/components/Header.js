import React from 'react';
import '../styles/Header.css';
import Search from './Search'

const Header = props => {
  const searchActive = props.searchActive
  return (
    <div>
      YUM
      <Search />
    </div>
  )
}

export default Header;