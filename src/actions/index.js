import axios from 'axios';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'
export const FETCH_LOCATION = 'FETCH_LOCATION'

const API_URL = 'http://api.spitcast.com/api/'
const ROOT_URL = 'http://www.spitcast.com/api/'

export function fetchLocations() {
  const request = axios.get(`${API_URL}top/spots/`)

  return {
    type: FETCH_LOCATIONS,
    payload: request
  }
}

export function fetchLocation(spot_id) {
    const request = axios.get(`${ROOT_URL}spot/forecast/${spot_id}/`)

    return {
      type: FETCH_LOCATION,
      payload: request
    }
}
