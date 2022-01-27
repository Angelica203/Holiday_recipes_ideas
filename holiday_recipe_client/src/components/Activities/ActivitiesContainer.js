import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActivitiesList from './ActivitiesList'
import ActivitiesForm from './ActivitiesForm'
import { fetchActivities } from '../../actions/activitiesActions'


 class ActivitiesContainer extends Component {
    componentDidMount(){
        this.props.dispatchFetchActivities()
        //this function dispatch mapdispatchtoprops
    }
//props can be passed from one component to the other,
//its immutable cannot be modified
    render() {
        return (
            <div>
                <h1>Holiday Activities</h1>
                    <ActivitiesForm /><br/>
                    <div>
                    {this.props.activities.map(activity => <ActivitiesList key={activity.id} {...activity} />)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activities: state.activities
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatchFetchActivities: () => dispatch(fetchActivities()) 
        //we are csllinh on our action creator
        //passing a function take dispatch as an argument
    }
}
//maping all my activities to my state
//
export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)