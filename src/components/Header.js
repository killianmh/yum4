import React from 'react';
import {
  Link
} from "react-router-dom";
import '../styles/Header.css';

const Header = props => {
  const searchActive = props.searchActive
  return (
    <div>
      YUM
      {props.children}
    </div>
  )
}

export default Header