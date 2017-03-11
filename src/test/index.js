import React from 'react'
import ReactDOM from 'react-dom'
import chai, { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'
import Container from '../components/container'

import LocationList from '../components/location_list'
import LocationShow from '../components/location_show'

import store from '../' // ??
import * as actions from '../actions/index'

const should = chai.should();

describe('smoke tests', () => {
  it('Container renders without crashing', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper).to.have.lengthOf(1)
  })
})
