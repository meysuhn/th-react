import React from 'react';
import { NavLink } from 'react-router-dom';




const Nav = (props) => {

  const handleClick = (event) => {
    // console.log('df');
    // console.log(props);
    // console.log(event.target.getAttribute('value'));
    props.props.onSearch(event.target.getAttribute('value')); // pass the searchForm state back to onSearch in app.js
    // this.setState({
    //   value: event.target.value});
  }


  return (
    <nav className="main-nav"> { /* "must use className instead of 'class'" */}
        <ul>
          <li onClick={handleClick.bind(this)}><NavLink value='Horsehead Nebula' to='/HorseheadNebula'>Horsehead</NavLink></li>
          <li onClick={handleClick.bind(this)}><NavLink value='Crab Nebula' to='/CrabNebula'>Crab</NavLink></li>
          <li onClick={handleClick.bind(this)}><NavLink value='Orion Nebula' to='/OrionNebula'>Orion</NavLink></li>
        </ul>
    </nav>
  )
}



export default Nav;
