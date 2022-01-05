import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipeActions'
import RecipeList from './RecipeList'
import RecipesForm from './RecipesForm'

//fetch the data

class RecipesContainer extends Component {
    //this function give us access to maptodispatch
    componentDidMount(){
        this.props.dispatchFetchRecipes()
    }


    render() {
        return (
            <div>
            <RecipesForm />
            <ul>
            {this.props.recipes.map(recipe => <RecipeList key={recipe.id}{...recipe} />)}
            </ul>
            </div>
        )
    }
}

//thunk
//callback function
function mapDispatchToProps(dispatch){
    return {
        dispatchFetchRecipes: () => dispatch(fetchRecipes())
    }
}

 function mapStateToProps(state){
    return{
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
