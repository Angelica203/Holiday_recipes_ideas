
import React from 'react'
import RecipesContainer from './RecipesContainer'
import { fetchRecipes } from '../actions/recipeActions'
import Router from './Router'
import Home from './Home'

const App = () => {
        return (
            <div>
                <Home />
                <RecipesContainer />
                <Router />
            </div>
        );
};

export default App;