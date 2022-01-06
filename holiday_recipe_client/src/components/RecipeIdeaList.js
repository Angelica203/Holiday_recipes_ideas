import React from 'react'
import RecipesContainer from './RecipesContainer'
import { deleteRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'

function RecipeIdeaList(props){
    function handleDelete(){
        props.dispatchDeleteRecipe(props.id)
    }
    function handleSave(){
        
    }
    return(
        <div>
    <li>{props.holiday_type} - {props.name}</li>
        <button onClick={handleDelete}>Delete</button><br/>
        <button onClick={handleSave}>Save</button>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}


export default connect(null, mapDispatchToProps)(RecipeIdeaList)
