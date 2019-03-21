import React from 'react';
import Item from './Gallery-item';


// Initally array is 0. This will cause an error in the below? Deal with it.

// You pass props to a component via a JSX tag at the place where it's used.
const Gallery = (props) => {
  console.log(props);
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
      {props.initialPics.map( pic =>
        // console.log(pic.imgSrc)
        <Item id={pic.id} server={pic.server} secret={pic.secret}/>
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


// // You pass props to a component via a JSX tag at the place where it's used.
// const Gallery = (props) => {
//   console.log(props);
//   return (
//     <div className="photo-container">
//       <h2>Results</h2>
//       <ul>
//       {props.initialPics.map( pic =>
//         // console.log(pic.imgSrc)
//         <Item key={pic.id} pic={pic.imgSrc}/>
//       )}
//       {/*<GalleryItem />*/}
//       {/* Later you'll need some logic here to determine which displays
//       <li className="not-found">
//       <h3>No Results Found</h3>
//       <p>You search did not return any results. Please try again.</p>
//       </li> */}
//       </ul>
//
//     </div>
//   )
// }



export default Gallery;
