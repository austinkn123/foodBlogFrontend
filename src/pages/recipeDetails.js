import '../App.css'
import React from 'react';
// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../useFetch';
import RatingStars from '../components/rating';

const RecipeDetails = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: recipeDetails } = useFetch('http://localhost:9000/specificRecipe/'+ id);

    const handleClickDelete = () => {
    fetch('http://localhost:9000/delete/' + id, {
        method: 'DELETE'
    }).then(() => {
        navigate('/');
    }) 
    }

    const handleClickFavorite = () => {

        fetch('http://localhost:9000/favorite/' + id, {
            method: 'PUT'
        }).then(() => {
            navigate('/');
            window.location.reload(true);
        }) 

    }
    const handleClickUNFavorite = () => {
        fetch('http://localhost:9000/unFavorite/' + id, {
        method: 'PUT'
        }).then(() => {
            navigate('/');
            window.location.reload(true);
        }) 
    }


    const routeChange = () =>{ 
        navigate('/UpdateRecipe/' + id);
    }

    return (
        <div className='bg-gray-300 min-h-screen px-44 py-16 '>
        {/* <p>RECIPE: {id}</p> */}
       
        <h1 className='font-header font-semibold text-6xl '>{recipeDetails.name} </h1>
        <div >
            <RatingStars rating={recipeDetails.rating}/>
        </div>
        
        {/* <p>Rating: {recipeDetails.rating}</p> */}
        <div className='flex flex-row font-body text-m mt-4'>
            <p className=' font-bold mr-1 px-1 py-1'>Type: </p>
            <p className=' mr-auto container  px-1 py-1 bg-yellow-200 w-fit'> {recipeDetails.type}</p>
            <p className=' font-bold mr-1 px-1 py-1'>Ease Of Preparation: </p>
            <p className=' mr-auto container px-1 py-1 bg-yellow-200 w-fit'>{recipeDetails.easeOfPrep}</p>
            <p className=' font-bold mr-1 px-1 py-1'>Preparation Time: </p>
            <p className=' mr-auto container px-1 py-1 bg-yellow-200 w-fit'>{recipeDetails.prepTime}</p>
        </div>
        
        
        <div className='flex flex-row'>
            
        </div>
        
        <p className='font-body font-semibold text-xl mt-7'>Ingredients: </p>
        <div className='container mx-auto px-2 py-4 h-fit bg-yellow-200 '>
            {recipeDetails.ingredients}
        </div>
        <p className='font-body font-semibold text-xl mt-7'>Directions / Notes: </p>
        <div className='container mx-auto px-2 py-4 h-fit bg-yellow-200'>
            {recipeDetails.notes}
        </div>
        
        {/* <p>Favorite: {String(recipeDetails.favorite)}</p> */}

        <div className='flex flex-row justify-center mt-7 '>
            <button 
            onClick={handleClickDelete} 
            className='bg-yellow-100 hover:bg-red-300 transition duration-500 font-semibold 
            py-2 px-4 border border-yellow-400 rounded shadow text-lg mt-4 mr-11'>
                Delete
            </button>

            <button 
            onClick={routeChange} 
            className='bg-yellow-100 hover:bg-yellow-200 transition duration-500 font-semibold
            py-2 px-4 border border-yellow-400 rounded shadow text-lg mt-4 mr-11'>
                Update
            </button>

            <button 
                onClick={
                    recipeDetails.favorite === true ? handleClickUNFavorite : handleClickFavorite
                } 
                className={recipeDetails.favorite ? 'bg-yellow-100 hover:bg-red-300 transition duration-500 font-semibold py-2 px-4 border border-yellow-400 rounded shadow text-lg mt-4' : 'bg-yellow-100 hover:bg-green-300 transition duration-500 font-semibold py-2 px-4 border border-yellow-400 rounded shadow text-lg mt-4'}
            >
            {recipeDetails.favorite ? "Unfavorite" : "Favorite"}
            </button>
        </div>
        

        </div>
    );
}

export default RecipeDetails;

