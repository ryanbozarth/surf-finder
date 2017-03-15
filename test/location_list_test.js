import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import { StatelessLocationList as LocationList } from '../src/components/location_list.js'

describe('LocationList', () => {

  it('renders without exploding', function() {
    expect(shallow(<LocationList
      locations={[]}
      fetchLocations={()=> {}} />).contains(<div></div>))
  });
  it('should link to forecast on click', function() {

  });


});
