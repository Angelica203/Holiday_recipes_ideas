
//this will contain all the data and methods and mounting


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, fetchRecipes } from '../actions/recipeActions'
import RecipeList from './RecipeList'
import RecipesForm from './RecipesForm'

 class RecipesContainer extends Component {
     componentDidMount(){
         this.props.fetchRecipes()
     }
    render() {
        return (
            <div>
                Add Your Recipe
                <RecipesForm />
                <RecipeList />
            </div>
        );
    }
}
export default connect(null, { fetchRecipes })(RecipesContainer);