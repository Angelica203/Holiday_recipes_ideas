
import React from 'react'
import RecipesContainer from './RecipesContainer'
import { fetchRecipes } from '../actions/recipeActions'
import Router from './Router'
// import Home from './Home'
// import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
// import './components/App.css'

const App = () => {
        return (
            <div>
                {/* <NavLink to="/">Home</NavLink><br/> */}
                {/* <NavLink to="/recipes">Recipes</NavLink><br/> */}
                {/* <RecipesContainer /> */}
                <Navbar />
                <Router />
            </div>
        );
};

export default App;