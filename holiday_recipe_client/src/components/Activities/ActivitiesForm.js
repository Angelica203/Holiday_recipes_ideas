import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../../actions/activitiesActions';


class ActivitiesForm extends Component {
    state = {
       name: '',
       description:''
       
    }


handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}
    handleSubmit = e => {
    e.preventDefault()
    this.props.dispatchAddActivity(this.state)
    this.setState({
        name: '',
        description: ''
    })
    //dispatch addActivity, clear my state
}
  
//controlled component
    render() {
        return (
            
            <form className="form" onSubmit={ this.handleSubmit}>

                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                <br/>
                <br/>
                 <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name="description"/>
                
                <br/>
                <br/>
                <input type='submit' value="Share Recipe"/>
            </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatchAddActivity: (activity) => dispatch(addActivity(activity))
    }
}

export default connect(null, mapDispatchToProps)(ActivitiesForm);
 