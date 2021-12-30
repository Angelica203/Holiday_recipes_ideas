//fetch recipe form api

export const fetchRecipes = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json())
        .then(recipes => dispatch({type: 'FETCH_RECIPES', payload: recipes})
        ) 

    }
}
export const addRecipe = (recipe) => {
    return(dispatch) => {
    fetch('http://localhost:3000/recipes',{
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(recipe => dispatch({ type: 'ADD_RECIPE', payload: recipe})) 

}
}

//make sure i have a GET & POST reaquest
