import React from 'react';
import {
  Link
} from "react-router-dom";
import '../styles/Header.css';

const Header = props => {
  const searchActive = props.searchActive
  return (
    <div className="header">
      <div className="container">
        <div className="title">
          Yum
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Header