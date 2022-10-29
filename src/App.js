import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import HomePage from './pages/homePage';
import AddRecipe from './pages/addRecipe';
import RecipeDetails from './pages/recipeDetails';
import UpdateRecipe from './pages/updateRecipe';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (

  <Router>
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/AddRecipe" element={<AddRecipe/>}/>
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />}/>
          <Route path="/UpdateRecipe/:id" element={<UpdateRecipe />}/>
        </Routes>
      </div>
    </div>
  </Router>


  );
}

export default App;
