import '../App.css'
import cover from "../imgs/foodCover.jpg"
import React from 'react';
import RecipeList from '../components/recipeList';

const HomePage = () => {
  // window.location.reload(false);
  return (
    <div className=" bg-gray-300 min-h-screen py-10 px-10" >
      <img className="flex justify-center w-full  h-fit " src={cover} alt="cover" />
      <div className=" font-header text-center text-5xl py-10 px-10 ">
        
        The Food Blog
        <div className=" font-header text-center text-xl ">
          Try adding a blog...
        </div>
        
      </div>
      
      <RecipeList/>
      

    </div>
  );
}

export default HomePage;