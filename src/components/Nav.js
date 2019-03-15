import React from 'react';



const Nav = (props) => {
  return (
    <nav className="main-nav"> { /* "must use className instead of 'class'" */}
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
    </nav>
  )
}



export default Nav;
