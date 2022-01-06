export const addToSavedRecipes = (id) => {
    return(dispatch) => {
        fetch('http://localhost:3000/saved_recipes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipe_id: recipeId,
                user_id: 1
            })
        })
        .then(response => response.json())
        .then(data =>
            dispatch({ type: 'ADD_TO_SAVED', payload: data})
            )
    }
}

export const fetchSavedRecipes = () => {
    return (dispatch) => (
        fetch('http://localhost:3000/saved_recipes')
        .then(response => response.json())
        .then(savedrecipes => 
            dispatch({type: 'FETCH_SAVED_RECIPES', payload: savedrecipes})
        )
    )

}