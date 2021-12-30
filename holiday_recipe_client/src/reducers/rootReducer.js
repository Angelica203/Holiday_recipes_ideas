import { combineReducers } from 'redux'
import { recipesReducer } from './recipesReducer'
import { recipeListReducer } from './recipeListReducer';

export const rootReducer = combineReducers({
    recipe: recipesReducer,
    recipeList: recipeListReducer

});