import React            from 'react'
import { Provider }     from 'react-redux'
import { createStore, applyMiddleware }  from 'redux'

import ReduxThunk from 'redux-thunk'; // no changes here

import rootReducer      from './reducers'

import App              from './components/app'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const Pure = () => <Provider store={store}> <App /></Provider>

export default Pure

