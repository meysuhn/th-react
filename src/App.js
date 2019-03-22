import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './config.js'; // import API key
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  // Loading state initially set to true to avoid 'no images' message displaying on load.
  constructor() {
    super();
    this.state = {
      images: [], // Set to empty array by default
      loading: true,
    };
  }

  componentDidMount() {
    // query is initially set to 'lunar' and performSearch() runs from here so that some images display on load.
    // When user performs their own search the 'query' value is replaced and new search performed.
    this.performSearch();
  }


  performSearch = (query = 'nebula') => { // query set to 'nebula' as default
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        loading: false, // Switch loading state to false when API response is in. Gallery.js then handles what is displayed.
        title: query
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(images) {
    return (
      <BrowserRouter> {/* Wrap the BrowserRouter around the whole app */}
        <div className="container">
          <Header onSearch={this.performSearch}/>
          <div className="photo-container">
            { // To avoid Gallery.js 'No Results Found' message displaying on first load, a 'loading' state has been added.
              (this.state.loading) // see lines 26 & 42 above. You can play with this in dev tools by unchecking state loading:
              ? <p>Loading...</p> // Ternary Operators. If condition (loading) is true then render <p>Loading...
              : <Switch> {/* If 'loading' is false then render Gallery componenets */}
                <Route exact path="/" render={ () => <Gallery responseAPI={this.state}/>} />
                <Route path="/HorseheadNebula" render={ () => <Gallery responseAPI={this.state}/>} />
                <Route path="/CrabNebula" render={ () => <Gallery responseAPI={this.state}/>} />
                <Route path="/OrionNebula" render={ () => <Gallery responseAPI={this.state}/>} />
                <Route component={NotFound} />
              </Switch>
            }
          </div>

          {/* This pattern was used before adding Router functionality. */}
          {/*<Gallery initialPics={this.state.images}/>*/}
        </div>
      </BrowserRouter>
    );
  }
}


// // Dummy array of players used for data before API added.
// const pics = [
//   {
//    imgSrc: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
//    alt: "",
//    id: "1"
//  },
//  {
//    imgSrc: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
//    alt: "",
//    id: "2"
//  },
//  {
//    imgSrc: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
//    alt: "",
//    id: "3"
//  },
//  {
//    imgSrc: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
//    alt: "",
//    id: "4"
//  }
// ];

export default App;
