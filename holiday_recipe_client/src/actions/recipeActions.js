//fetch recipe form api
//thunk allow redux to do more of the logic
//Thunk allows us to return a function inside of our 
// our action creator returns a plain JavaScript object,
//receives the store's dispatch function as its argument,
//we can dispatch multiple actions from inside that returned function.


export const fetchRecipes = () => {
    //give me access to dispatch because of thunk middleware creaters
    return(dispatch) => {
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json()) 
        .then(recipes => {
            dispatch({type: 'FETCH_RECIPES', payload: recipes}) //data
        //making fetch request, getting data then passing it to dispatch
        }) 

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

export const deleteRecipe = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/recipes/${id}`,{
            method: 'DELETE',
    })
    .then(data => dispatch({type: 'DELETE_RECIPE', payload: id}))
  }
}