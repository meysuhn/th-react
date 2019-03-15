import React from 'react';
import Nav from './Nav';
import SearchForm from './Search-form';


// Chris you've actually created a modularised component!
const Header = (props) => {
  return (
    <header className="App-header">
      <title>Chris' Mega App</title>
      <SearchForm />
      <Nav />
    </header>
  )
}


export default Header;
