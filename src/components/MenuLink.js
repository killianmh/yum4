import React from 'react';
import {
  Link
} from "react-router-dom";
import ModalLink from './ModalLink'

const MenuLink = props => {
  return(
    <div>
      {
        props.modalLink
          ? <li><ModalLink>{props.name}</ModalLink></li>
          : <li><Link to={props.link}>{props.name}</Link></li>
      }
    </div>
  )
}

export default MenuLink;