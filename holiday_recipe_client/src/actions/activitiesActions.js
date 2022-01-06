export const fetchActivities = () =>{
    return(dispatch) => {
        fetch('http://localhost:3000/activities')
        .then(resp => resp.json())
        .then(activities => dispatch({type: 'FETCH_ACTIVITES', payload: activities})
        )
    }
}