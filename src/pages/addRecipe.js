import '../App.css'
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const AddRecipe = () => {

  // const { id } = useParams();

  // const { data: recipe } = useFetch('http://localhost:9000/delete/' + id);

  const navigate = useNavigate();

  // const [foodID, setFoodID] = useState(Number);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [easeOfPrep, setEaseOfPrep] = useState("");
  const [notes, setNotes] = useState("");
  const [type, setType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [favorite, setFavorite] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {  name, rating, easeOfPrep, notes, type, prepTime, ingredients, favorite };

    //New recipe
    fetch('http://localhost:9000/saveRecipe', {
      method: 'POST',
      headers: { 
        
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(recipe)
      }).then(() => {
        console.log('new recipe added');
        console.log(recipe);
        navigate('/');
      })
    }



  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl  ">
        <label className='font-header font-semibold'>Recipe Name</label>
        <div className="mb-4">
          <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                    focus:border-yellow-400 py-2 px-4 w-full '
          />
        </div>
        <label className='font-header font-semibold'>Ease of Preparation</label>
        <div className="mb-4">
            <input 
            type="text" 
            required 
            value={easeOfPrep}
            onChange={(e) => setEaseOfPrep(e.target.value)}
            className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                    focus:border-yellow-400 py-2 px-4 w-full'
            />
        </div>
        <label className='font-header font-semibold'>Preparation Time</label>
        <div className="mb-4">
          <input
          required
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                    focus:border-yellow-400 py-2 px-4 w-full'
          />
        </div>
        <label className='font-header font-semibold'>Ingredients</label>
        <div className="mb-4">
          <textarea
          rows={3}
          cols={3}
          required
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                    focus:border-yellow-400 py-2 px-4 w-full resize-none'
          />
        </div>

        <label className='font-header font-semibold'>Directions or Notes</label>
        <div className="mb-4">
          <textarea 
          rows={3}
          cols={3}
          type="text" 
          required 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                    focus:border-yellow-400 py-2 px-4 w-full resize-none'
          />
        </div>
        <div className='flex flex-row'>
          <div className="mb-4 ">
            <select
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                      focus:border-yellow-400 py-2 px-4 font-header font-semibold'
            >
              <option value="" disabled selected>Type</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Entrée">Entrée</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
          <div className="mb-4 ml-7">
            <select
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className='rounded-lg border-2  bg-yellow-100 focus:outline-none 
                      focus:border-yellow-400 py-2 px-4 font-header font-semibold'
            >
              <option value="" disabled selected>Rating</option>
              <option value="5 stars">5 stars</option>
              <option value="4 stars">4 stars</option>
              <option value="3 stars">3 stars</option>
              <option value="2 stars">2 stars</option>
              <option value="1 star">1 star</option>
            </select>
          </div>
        </div>
        <button className='bg-yellow-100 hover:bg-yellow-200 transition duration-500 
        font-semibold py-2 px-4 border border-yellow-400 rounded shadow text-lg mt-6'>
          Add Recipe
        </button>
      </form>
    </div>


  );
}

export default AddRecipe;