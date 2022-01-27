import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipeActions'
import RecipeIdeaList from './RecipeIdeaList'
import RecipesIdeaForm from './RecipesIdeaForm'
class RecipesContainer extends Component {
    state = {filterRecipes: []}
    componentDidMount(){
        this.props.dispatchFetchRecipes()
    }
    
    handleSearch = e => {
        const search = e.target.value.toLowerCase()
        const filter = this.props.recipes.filter(recipe => recipe.name.toLowerCase().includes(search))
        this.setState({filterRecipes: filter})
    }
    

    render() {
        const conditionalRecipes = this.state.filterRecipes.length < 1 ? this.props.recipes : this.state.filterRecipes
        return (
            <div>
            <RecipesIdeaForm />
            <input type='text' onChange={this.handleSearch} name=" "/>

            <ul>
            {conditionalRecipes.map(recipe => <RecipeIdeaList key={recipe.id}{...recipe} />)}
            </ul>
            </div>
        )
    }
}
//rendering all of my data and 
//connected to my list component where im passing in these props
//where im geting my recipes from mapstatetoprops
//thunk
//we are calling on our action creator

function mapDispatchToProps(dispatch){
    return {
        dispatchFetchRecipes: () => dispatch(fetchRecipes())
    }
}
//passing in an argument of state that is comming from my store
//returning and object that is being merged with our props
 function mapStateToProps(stateFromStore){
    return{
        recipes: stateFromStore.recipes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
