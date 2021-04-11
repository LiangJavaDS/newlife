import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { counter, addPerson } from './reducers'
const allReducers = combineReducers({ counter, addPerson })
//连接reducer
export const store = createStore(allReducers, applyMiddleware(thunk))