import { combineReducers } from 'redux'
import LocationReducer from './reducer_locations'

const rootReducer = combineReducers({
  locations: LocationReducer
})

export default rootReducer
