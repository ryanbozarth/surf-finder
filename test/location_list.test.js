import React from 'react'
import LocationList from '../src/components/location_list.js'
import renderer from 'react-test-renderer'

test('LocationList renders', () => {
  const component = renderer.create(
    <LocationList />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
