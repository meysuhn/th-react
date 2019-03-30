import React from 'react';
import Nav from './Nav';
import SearchForm from './Search-form';


// Chris you've actually created a modularised component!
const Header = (props) => {
  // console.log(props);
  return (
    <header className="App-header">
      <title>Nebula Views</title>
      <SearchForm onSearch={props.onSearch}/>
      <Nav props={props}/>
    </header>
  )
}


export default Header;

// <SearchForm props={props}/>
