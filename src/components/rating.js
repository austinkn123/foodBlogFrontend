import '../App.css'
import React from 'react';
import ratingStar from '../imgs/ratingStar.png';

const RatingStars = (props) => {
    function renderImage() {
        switch(props.rating) {
            case "5 stars":
                return (
                    <div className='flex row'>
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                    </div>
                );
            case "4 stars":
                return (
                    <div className='flex row'>
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                    </div>
                );
            case "3 stars":
                return (
                    <div className='flex row'>
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                    </div>
                );
            case "2 stars":
                return (
                    <div className='flex row'>
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                    </div>
                );
            case "1 star":
                return (
                    <div className='flex row'>
                        <img className="h-5 w-5 object-cover" src={ratingStar} />
                    </div>
                );
            default:
                return 'foo';
        }
    }

  return (
    <div className='flex justify-right'>
        {renderImage.call()}
    </div>
  );
}

export default RatingStars;