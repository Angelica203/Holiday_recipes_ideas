export const recipeListReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RECIPE':
            return action.payload
            default:
                return state
    }
}

