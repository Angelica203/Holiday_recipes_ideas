//user to see a recipe and add 
export const recipesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RECIPES':
            return action.payload
        case 'ADD_RECIPE':
            return [...state, action.payload]
            default:
                return state
    }
}

//NEED SOME REFACTIORING AFTER REACT I BUILT
