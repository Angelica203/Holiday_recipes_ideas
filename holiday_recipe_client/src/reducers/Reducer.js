
export const Reducer = (state = {recipes: [], activities: []}, action) => {
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
                case 'ADD_ACTIVITY':
                    return {
                        ...state,
                        activities: [...state.activities, action.payload]
                    }
             case 'DELETE_ACTIVITY':
                    const newActivityArray = state.activities.filter(a => a.id !== action.payload)
                    return{
                        ...state,
                        activities: newActivityArray
                 }       
        
            default:
                return state
    }


}

//return an object
//NEED SOME REFACTIORING AFTER REACT I BUILT
