import { FETCH_LOCATIONS, FETCH_LOCATION } from '../actions/index'

const INITIAL_STATE = {all: [], location: null }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return { ...state, location: action.payload.data }

    case FETCH_LOCATIONS:
      return { ...state, all: action.payload.data };
  default:
    return state
  }
}
