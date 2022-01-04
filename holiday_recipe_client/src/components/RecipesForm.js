import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addRecipe } from '../actions/recipeActions'

class RecipesForm extends Component {
    state = {
       name: '',
       ingredients: '',
       cook_time: '',
       img: ''
    }

handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}
    handleSubmit = e => {
    e.preventDefault()
    this.props.dispatchAddRecipe(this.state)
}
  

    render() {
        return (
            // <form onSubmit={() => this.handleSubmit()}>
            <form onSubmit={ this.handleSubmit}>

                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                < br/>
                <label>Ingredients:</label>
                <input type='text' value={this.state.ingredients} onChange={this.handleChange} name="ingredients"/>
                < br/>
                <label>cook_time:</label>
                <input type='timer' value={this.state.cook_time} onChange={this.handleChange} name="cook_time"/>
                < br/>
                <label>Image(optional):</label>
                <input type='img_url' value={this.state.img} onChange={this.handleChange} name="img"/>
                < br/>
                <input type='submit' value="Share Recipe"/>
            </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatchAddRecipe: (recipe) => dispatch(addRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(RecipesForm);
 