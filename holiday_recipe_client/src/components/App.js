
import React from 'react'
import RecipesContainer from './RecipesContainer'
import { fetchRecipes } from '../actions/recipeActions'
import Router from './Router'
// import Home from './Home'
import { NavLink } from 'react-router-dom'

const App = () => {
        return (
            <div>
                <NavLink to="/">Home</NavLink><br/>
                {/* <NavLink to="/recipes">Recipes</NavLink><br/> */}
                <RecipesContainer />
                <Router />
            </div>
        );
};

export default App;