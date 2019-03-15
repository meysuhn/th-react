import React from 'react';


const GalleryItem = (props) => {
  console.log(props)
  return (
    <li>
      <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
    </li>
  )
}


export default GalleryItem;

{/* What you need to end up with is:
  <li>
    <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
  </li>
*/}
