import React from 'react'
import { connect } from 'react-redux'
import { deleteActivity } from '../../actions/activitiesActions'



function ActivitiesList(props) {
    function handleDelete(){
        props.dispatchDeleteActivity(props.id)
    }

    return(
        <div>
            <li>{props.name}-{props.description}</li>
                <button onClick={handleDelete}>Delete</button><br/>
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteActivity: (id) => dispatch(deleteActivity(id))
    }
}


export default connect(null, mapDispatchToProps)(ActivitiesList)

