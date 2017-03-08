import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Container from './components/container'
import LocationList from './components/location_list'
import LocationShow from './components/location_show'

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={LocationList} />
    <Route path="location/:spot_id" component={LocationShow} />
  </Route>

)
