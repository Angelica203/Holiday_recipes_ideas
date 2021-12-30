import React, { Component } from 'react'
import { connect } from 'react-redux'


// class RecipeList extends Component {
//     renderRecipes = () => {
//         return this.props.recipes.map((recipe) => (
//             <div key={recipe.id} className="recipe">
//             <RecipeList recipe={recipe}/>

//             </div>
//         ));
//     }
//     render(){
//         return <>{this.renderRecipeList()}</>
//     }
// }

const RecipeList= ({recipes}) => {
        return (
            <div>
                
                {recipes.map(recipe =>(
                <ul><li key={recipe.id}>
                    {recipe.name} -
                    {recipe.ingredients} -
                    {recipe.cook_time} -
                    {recipe.Image}
                </li></ul>)
                )}
            </div>
        )
    };

    const mapStateToProps = state => {
        return {
             recipes: state.recipes 
            }
    }

export default connect(mapStateToProps)(RecipeList)
