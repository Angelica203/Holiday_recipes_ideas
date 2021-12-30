import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import RecipeList from '../components/RecipeList'

import About from '../components/About'
import Home from '../components/Home'



const Router = () => {
        return (
            //switch has been replaces with routes if using react-router-dom v6
<Switch>
            <Route exact path= '/' component={Home}/>
            <Route  path='/about' component={About}/>
            <Route  path='/Recipes' component={RecipeList}/>

</Switch>       
 )
    };


export default Router;