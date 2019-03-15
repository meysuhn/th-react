import React from 'react';
import GalleryItem from './Gallery-item';



const Item = (pic) => {
  return (
    <li>
      <img src={pic} alt=""/>
    </li>
  )
}


// You pass props to a component via a JSX tag at the place where it's used.
const Gallery = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
      {props.initialPlayers.map( pic =>
        // console.log(pic.imgSrc)
        <Item pic={pic.imgSrc}/>
      )}
      {/*<GalleryItem />*/}
      {/* Later you'll need some logic here to determine which displays
      <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
      </li> */}
      </ul>
    </div>
  )
}


export default Gallery;
