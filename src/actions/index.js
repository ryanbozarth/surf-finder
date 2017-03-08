import axios from 'axios';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'

const ROOT_URL = 'http://api.spitcast.com/api/spot/all'

export function fetchLocation() {
  const request = axios.get(`${ROOT_URL}`)

  return {
    type: FETCH_LOCATIONS,
    payload: request
  }
}
