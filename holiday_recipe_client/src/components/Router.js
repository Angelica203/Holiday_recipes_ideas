import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import RecipesContainer from './RecipesContainer'
import ActivitiesContainer from './Activities/ActivitiesContainer'



const Router = () => {
        return (
<Switch>
            <Route exact path= '/' component={Home}/>   
            <Route  path='/recipes' component={RecipesContainer}/>
            <Route  path='/activities' component={ActivitiesContainer}/>
</Switch>
//hooks
//swith choose the routes that matches

 )
    };


export default Router;