import React from 'react';



const Item = (props) => {
  return (
    <li>
      <img key={props.id} src={`https://farm5.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
    </li>
  )
}

// <img key={props.id} src={props.pic} alt=""/>
// <Item key={pic.id} server={pic.server} secret={pic.secret}/>

export default Item;

// This pattern does work.
// You now just need to make sure you're getting props in the first place
// Then figure out how to splice this up into the src tag
// https://farm5.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg
// https://farm5.staticflickr.com/7913/47433538741_377ff6e208.jpg
//
// https://farm5.staticflickr.com/7829/47433538661_3fac2f4e7d.jpg
//
// https://farm5.staticflickr.com/7880/33557466928_649731a787.jpg
