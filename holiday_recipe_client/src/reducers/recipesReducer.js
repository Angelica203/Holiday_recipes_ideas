
export const RecipesReducer = (state = {recipes: [], activies: []}, action) => {
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
            case 'FETCH_ACTIVITIES':
                return{
                    ...state,
                    activies: action.payload
                }
            default:
                return state
    }


}

//return an object
//NEED SOME REFACTIORING AFTER REACT I BUILT
