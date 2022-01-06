import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addRecipe } from '../actions/recipeActions'

class RecipesIdeaForm extends Component {
    state = {
       name: '',
       ingredients: '',
       cook_time: 0,
       image: ''
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
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
            
            <form onSubmit={ this.handleSubmit}>

                <label>Holiday Type:</label>
                <input type='text' value={this.state.holiday_type} onChange={this.handleChange} name="holiday_type"/>
                < br/>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                < br/>
                {/* <label>Ingredients:</label>
                <input type='text' value={this.state.ingredients} onChange={this.handleChange} name="ingredients"/>
                < br/>
                <label>cook_time:</label>
                <input type='number' value={this.state.cook_time} onChange={this.handleChange} name="cook_time"/>
                < br/>
                <label>Image(optional):</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/> */}
                
                <input type="file" onChange={this.onImageChange} name="filetype" id="image"/>

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

export default connect(null, mapDispatchToProps)(RecipesIdeaForm);
 