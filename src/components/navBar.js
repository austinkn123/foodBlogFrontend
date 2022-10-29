import '../App.css'
import React from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { data: myRecipes } = useFetch('http://localhost:9000/recipes');

  return (
    <div>
      
    <ul className="flex flex-row bg-zinc-900 p-7 h-20" >
      <li className="mr-6">
        <a className="text-gray-200 hover:text-yellow-200 transition duration-500" href="/">Home</a>
      </li>
      <li className="mr-6">
        <a className="text-gray-200 hover:text-yellow-200 transition duration-500" href="/AddRecipe">Add Recipe</a>
      </li>
      <div >
        <button className="peer  text-gray-200 hover:text-yellow-200 ">Favorites</button>
        <div className='hidden peer-hover:flex hover:flex w-[200px] flex-col bg-gray-200 drop-shadow-md'>
          {myRecipes.map( (recipe) => {
            if(recipe.favorite){
              return (
              <div className='py-2  truncate ' key={recipe.foodID} >
                <Link to={`/RecipeDetails/${recipe.foodID}`} >
                    <a className="px-5 py-3 hover:text-yellow-500 transition duration-500" >{recipe.name}</a>
                </Link>
              </div>
              
              );
            }
          })}
        </div>
      </div>
      </ul>
    </div>
  );
}

export default NavBar;