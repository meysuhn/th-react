import React from 'react';
import Item from './Gallery-item';


// You pass props to a component via a JSX tag at the place where it's used.
const Gallery = (props) => {
  // If there are images then display, if no images display message to user.
  let images;
  if (props.responseAPI.images.length > 0) {
    images = props.responseAPI.images.map( pic =>
      <Item id={pic.id} server={pic.server} secret={pic.secret}/>
    );
  } else {
    images = <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
    </li>
  }

  return (
    <React.Fragment>
      <h2>Showing Results for "{props.responseAPI.title}"</h2>
      <ul>
        {images}
      </ul>
    </React.Fragment>

  )
}

export default Gallery;

// <div className="photo-container">
//
//   <h2>Results</h2>
//   <h1>Showing Results for "{props.initialPics.title}"</h1>
//   <ul>
//     {images}
//   </ul>
// </div>






// {props.initialPics.map( pic =>
//   // console.log(pic.imgSrc)
//   <Item id={pic.id} server={pic.server} secret={pic.secret}/>
// )}


// {/*<GalleryItem />*/}


// <li className="not-found">
// <h3>No Results Found</h3>
// <p>You search did not return any results. Please try again.</p>
// </li>


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
