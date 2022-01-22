//this is my reducer that is from my store
export const Reducer = (state = {recipes: [], activities: []}, action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            console.log('f')
            return {
                ...state,    //so we dont loose our original state
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
//reducers take in data and reduce it to a single object: the state - 
//Reducers are functions with a switch statement that returns a new state 
//based on the action type sent - not mutate state directly but return a new state 
//return an object
//NEED SOME REFACTIORING AFTER REACT I BUILT
