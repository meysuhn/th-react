import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

// CM: Import config file here.
import apiKey from './config.js';


// array of players
const players = [
  {
   imgSrc: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
   alt: ""
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
   alt: ""
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
   alt: ""
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
   alt: ""
 }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Gallery initialPlayers={players}/>
      </div>
    );
  }
}

export default App;
