
//Thunk allows us to return a function inside of our 
// our action creator returns a plain JavaScript object,
//receives the store's dispatch function as its argument,
//we can dispatch multiple actions from inside that returned function.
//thunk give me access to my dispatch because of the action creator



export const fetchActivities = () =>{
    return(dispatch) => {  
        fetch('http://localhost:3000/activities')
        .then(resp => resp.json())
        .then(activities => dispatch({type: 'FETCH_ACTIVITIES', payload: activities})
        )
    }
    
}

export const addActivity = (activity) => {
    return(dispatch) => {
    fetch('http://localhost:3000/activities',{
        method: 'POST',
        body: JSON.stringify(activity),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(activity => dispatch({ type: 'ADD_ACTIVITY', payload: activity})) 
    }
}

export const deleteActivity = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/activities/${id}`,{
            method: 'DELETE',
    })
    .then(data => dispatch({type: 'DELETE_ACTIVITY', payload: id}))
  }
}