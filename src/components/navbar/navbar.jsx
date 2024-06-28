import React from 'react';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const navbar = () => {
  let count = 0
  return (
    <div id="navbar">
      <div id="logo">Bliss!</div>
      <div id="options">
        <Link  to=""><div className='option'>HOME</div></Link>
        <Link to="collection"><div className='option'>COLLECTION</div></Link>
        <Link  to="loginsignup"><div id="signin">SIGN IN</div></Link>
        <div>
          <Link to="cart"><FontAwesomeIcon icon={faCartShopping}/></Link>
          <div id="count">{count}</div>
        </div>
      </div>
    </div>
  )
}

export default navbar
