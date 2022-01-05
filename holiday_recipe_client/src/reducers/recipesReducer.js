
export const RecipesReducer = (state = {recipes: []}, action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return {
                ...state,
            recipes: action.payload
            }
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
            case 'DELETE_RECIPE':
                const newRecipeArray = state.recipes.filter(r => r.id !== action.payload)
                return{
                    ...state,
                    recipes: newRecipeArray
                }
            default:
                return state
    }


}

//return an object
//NEED SOME REFACTIORING AFTER REACT I BUILT
