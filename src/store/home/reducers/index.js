import { combineReducers } from 'redux'

import counts from './count'

const home = combineReducers({
  counts
})

export default home