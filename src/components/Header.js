import React from 'react';
import Nav from './Nav';
import SearchForm from './Search-form';


// Chris you've actually created a modularised component!
const Header = (props) => {
  // console.log(props);
  return (
    <header className="App-header">
      <title>Nebula Views</title>
      <SearchForm props={props}/>
      <Nav props={props}/>
    </header>
  )
}


export default Header;
