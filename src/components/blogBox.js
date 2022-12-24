import '../App.css'
import React from 'react';
import AppetizerPic from '../imgs/appetizer.png';
import EntreePic from '../imgs/entree.png';
import DessertPic from '../imgs/dessert.png';
import SnackPic from '../imgs/snack.png';
import favoriteIcon from '../imgs/favorite.webp';
import RatingStars from '../components/rating';

const BlogBox = (props) => {
  
  let mealType = "Appetizer";
  let favImage = null;
  let icon = AppetizerPic;

  if(props.type == "Appetizer"){
    icon = AppetizerPic;
  }
  else if(props.type == "Entrée"){
    icon = EntreePic;
  }
  else if(props.type == "Dessert"){
    icon = DessertPic;
  }
  else if(props.type == "Snack"){
    icon = SnackPic;
  }

  if (props.favorite) {
    favImage = favoriteIcon;
  }

  function renderImage() {
    if (props.favorite) {
        return (
            <img className="h-10 w-10 object-cover" src={favImage} />
        );
    }
  }
      
  return (
    <div className="bg-yellow-100 text-left py-10 px-10 w-60 h-fit hover:bg-yellow-200 transition duration-500 ">
      <div className='flex justify-right'>
        {renderImage.call()}
        <img className="h-32 w-50 object-cover" src={icon} alt="pic" />
      </div>
      <div>
        
      </div>
      <p className=" font-body text-2xl font-bold truncate ...">{props.name} </p>
      <p>Type: {props.type}</p>
      <RatingStars rating= {props.rating}/>

      {/* <p>Rating: {props.rating}</p> */}
      {/* <p>ID: {props.id}</p> */}
      {/* <p>EaseOfPrep: {props.easeOfPrep}</p> */}
      {/* <p>Notes: {props.notes}</p> */}
      {/* <p>PrepTime: {props.prepTime}</p> */}
      {/* <p>Ingredients: {props.ingredients}</p> */}
      {/* <p>Favorite: {String(props.favorite)}</p> */}
      
      
    </div>
  );
}
//dfsdfs
export default BlogBox;