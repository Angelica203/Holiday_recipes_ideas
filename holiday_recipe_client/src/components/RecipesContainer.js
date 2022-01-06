import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipeActions'
import RecipesIdeaForm from './RecipesIdeaForm'
import RecipeIdeaList from './RecipeIdeaList'

class RecipesContainer extends Component {
    componentDidMount(){
        this.props.dispatchFetchRecipes()
    }

    render() {
        return (
            <div>
            <RecipesIdeaForm />
            <ul>
            {this.props.recipes.map(recipe => <RecipeIdeaList key={recipe.id}{...recipe} />)}
            </ul>
            </div>
        )
    }
}

//thunk
function mapDispatchToProps(dispatch){
    return {
        dispatchFetchRecipes: () => dispatch(fetchRecipes())
        //action has  access
    }
}

 function mapStateToProps(state){
    return{
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
