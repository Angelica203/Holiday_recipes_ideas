import React from 'react'
import RecipesContainer from './RecipesContainer'

function RecipeList(props){
    return(
        <div>
    <li>{props.name} - {props.ingredients} - {props.cook_time} - {props.image}</li>
        </div>
    )
}



export default RecipeList
