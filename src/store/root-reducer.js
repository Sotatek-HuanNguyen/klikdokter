import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// reducers
import home  from './home/reducers'

const rootReducer = combineReducers({
  home,
  routing: routerReducer
})

export default rootReducer
