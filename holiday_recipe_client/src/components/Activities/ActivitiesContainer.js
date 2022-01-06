import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from '../../actions/activitiesActions'


 class ActivitiesContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchActivities()
    }

    render() {
        return (
            <div>
                
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
export default connect(null, mapDispatchToProps)(ActivitiesContainer)