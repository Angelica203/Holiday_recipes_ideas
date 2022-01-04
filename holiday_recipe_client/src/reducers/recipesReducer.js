//user to see a recipe and add 
export const RecipesReducer = (state = {recipes: []}, action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return {
                ...state,
            recipes: action.payload
            }
        case 'ADD_RECIPE':
            return [state, action.payload]
            default:
                return state
    }
}

//NEED SOME REFACTIORING AFTER REACT I BUILT
