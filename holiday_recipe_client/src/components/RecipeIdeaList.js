import React from 'react'
import { deleteRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'

function RecipeIdeaList(props){
    function handleDelete(){
        props.dispatchDeleteRecipe(props.id)
    }
    return(
        <div>
        <li>{props.holiday_type} - {props.name}</li>
        <button onClick={handleDelete}>Delete</button><br/>
        </div>
    )
}
//calling on dispatch allows us to pass a funtion instead of an action
function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}


export default connect(null, mapDispatchToProps)(RecipeIdeaList)
