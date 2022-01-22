
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'

import { Provider } from 'react-redux'
import thunk from  'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App.js'
import { BrowserRouter as Router} from 'react-router-dom'
import { Reducer } from './reducers/Reducer.js'
//to create a store for redux 2 : createStore: reducer, devtools


//redux is seperate from react, 
//store is from redux
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
//thunk is allowing me to pass dispatch a callback , it looking if
//if its a callback then im going to call that function
ReactDOM.render( 
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
//provider is how we connecting react to redux

  //provider is the parent of router and router the parent of app