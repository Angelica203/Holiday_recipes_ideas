
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



const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
      <Router>
         <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )

  //provider is the parent of router and router the parent of app