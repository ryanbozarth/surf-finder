import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Container from './components/container'
import LocationList from './components/location-list'

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={LocationList} />
  </Route>

)
