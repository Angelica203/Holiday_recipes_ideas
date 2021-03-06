import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addRecipe } from '../actions/recipeActions'

class RecipesIdeaForm extends Component {
    state = {
        holiday_type: '',
        name: ''
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
    this.setState({
        holiday_type: '',
        name: '',
    })
    //dispatch addrecipe, clear my state
}
  
//controlled component
    render() {
        return (
            
            <form className="form" onSubmit={ this.handleSubmit}>

                <label>Holiday Type:</label>
                <input type='text' value={this.state.holiday_type} onChange={this.handleChange} name="holiday_type"/>
                
                <br/>
                <br/>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                <br/>                
                <br/>
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

export default connect(null, mapDispatchToProps)(RecipesIdeaForm);
 