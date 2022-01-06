import React, { Component } from 'react'
import { fetchSavedRecipes } from '../../actions/SavedRecipesActions'


export default class SavedRecipeContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchSavedRecipes()
    }

    render() {
        return (
            <div>
                <h1>Here Are Your Saved Recipes</h1>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatchFetchSavedRecipes: () => (dispatch(fetchSavedRecipes()))
    }
}
export default SavedRecipeContainer