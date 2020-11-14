import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index.js'


const store = createStore(
    combineReducers,
    // {},
    applyMiddleware(thunk)
)

export default store