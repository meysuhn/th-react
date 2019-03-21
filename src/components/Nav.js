import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
  return (
    <nav className="main-nav"> { /* "must use className instead of 'class'" */}
        <ul>
        { /* do you need 'exact' here or not? */}
          <li><NavLink exact to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
    </nav>
  )
}



export default Nav;
