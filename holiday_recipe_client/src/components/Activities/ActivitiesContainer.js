import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActivitiesList from './ActivitiesList'
import ActivitiesForm from './ActivitiesForm'
import { fetchActivities } from '../../actions/activitiesActions'


 class ActivitiesContainer extends Component {
    componentDidMount(){
        this.props.dispatchFetchActivities()
    }

    render() {
        return (
            <div>
            <ActivitiesForm />
            <ul>
            {this.props.activities.map(activity => <ActivitiesList key={activity.id}{...activity} />)}
            </ul>
 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatchFetchActivities: () => dispatch(fetchActivities()) 
    }
}
function mapStateToProps(stateFromStore){
    return{
        activities: stateFromStore.activities
    }
}
//
export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)