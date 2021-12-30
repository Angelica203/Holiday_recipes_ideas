
import React from 'react'
// import RecipesContainer from './RecipesContainer'
// import { fetchRecipes } from '../actions/recipeActions'
// import RecipeListContainer from './RecipeListContainer'
import Router from './Router'
import RecipesContainer from './RecipesContainer';

const App = () => {
        return (
            <div>
                <RecipesContainer />
                <Router />
            </div>
        );
};

export default App;