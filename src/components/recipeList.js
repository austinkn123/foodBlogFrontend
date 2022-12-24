import React from 'react';
import BlogBox from './blogBox';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';


function RecipeList () {
  //myRecipes is the array fetched from the api
  const { data: myRecipes } = useFetch('http://localhost:9000/recipes');

  return (
    <div className='flex flex-wrap justify-left'>
      {myRecipes.map( (recipe) => {
        
        return (
          <div className='py-10 px-5 ' key={recipe.foodID} >
            {/* ${} is a template literal so instead of string + ... its now string${}*/}
            <Link to={`/RecipeDetails/${recipe.foodID}`} >
              <BlogBox 
                id = {recipe.foodID}
                name={recipe.name}
                rating={recipe.rating}
                easeOfPrep={recipe.easeOfPrep}
                notes={recipe.notes}
                type={recipe.type}
                prepTime={recipe.prepTime}
                ingredients={recipe.ingredients}
                favorite={recipe.favorite}
              />
            </Link>
            
          </div>
          
        );
          

      })}
        
    </div>

  );    
}
    


export default RecipeList;




{/* <h1>Name: {recipe.Name}</h1>
<h1>Rating: {recipe.Rating}</h1>
<h1>EaseOfPrep: {recipe.EaseOfPrep}</h1>
<h1>Notes: {recipe.Notes}</h1>
<h1>Type: {recipe.Type}</h1>
<h1>PrepTime: {recipe.PrepTime}</h1>
<h1>Ingredients: {recipe.Ingredients}</h1> */}