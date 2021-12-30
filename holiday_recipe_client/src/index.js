
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'

import { Provider } from 'react-redux'
import thunk from  'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


import App from './components/App.js'
import { rootReducer } from './reducers/rootReducer'
import { BrowserRouter as Router} from 'react-router-dom'

//to create a store for redux 2 : createStore: reducer, devtools



const store = createStore(
    rootReducer,
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