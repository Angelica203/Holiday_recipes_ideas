import React from 'react'
import RecipesContainer from './RecipesContainer'
import { deleteRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'

function RecipeList(props){
    function handleDelete(){
        props.dispatchDeleteRecipe(props.id)
    }
    return(
        <div>
    <li>{props.name} - {props.ingredients} - {props.cook_time} - {props.image}</li>
        <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}


export default connect(null, mapDispatchToProps)(RecipeList)
