import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// CM: Import config file here.
import apiKey from './config.js';


// array of players
const pics = [
  {
   imgSrc: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
   alt: "",
   id: "1"
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
   alt: "",
   id: "2"
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
   alt: "",
   id: "3"
 },
 {
   imgSrc: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
   alt: "",
   id: "4"
 }
];

class App extends Component {

constructor() {
  super();
  this.state = {
    images: [] // Set to empty array by default
  };
}

componentDidMount() {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      images: response.data.photos.photo
    })
    // console.log(response.data.photos.photo);
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}

  render(images) {
    return (
      <BrowserRouter> {/* Wrap the BrowserRouter around the whole app */}
        <div className="container">
          <Header />
          {/* Leave routes for now. Come back later after you've fixed up API */}
          {/* If passing props use the pattern below: */}
          {/*
            <Route path="/cats" render={ () => <Gallery initialPics={images}/>} />
            <Route path="/dogs" render={ () => <Gallery initialPics={pics}/>} />
            <Route path="/computers" render={ () => <Gallery initialPics={pics}/>} />
          */}

          {/*<Route path="/" + {search} render={ () => <Gallery initialPics={pics}/>} />*/}

          {/* When not passing props the pattern below is possible: */}
          {/*<Route path="/dogs" component={Dogs} />*/}

          {/* This pattern was used before adding Router functionality. */}
          <Gallery initialPics={this.state.images}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
