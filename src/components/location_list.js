import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../actions/index'
import { Link } from 'react-router'

class LocationList extends Component {
  componentWillMount() {
    this.props.fetchLocations();
  }

  renderLocationList(){
    return this.props.locations.map((location) => {
      return (
        <li className="list-group-item" key={location.spot_id}>
          <Link to={"location/" + location.spot_id}>
            <strong>{location.spot_name}</strong>
            <span className="text-right">{location.shape}</span>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Locations</h3>
        <ul className="list-group">
          {this.renderLocationList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations.all }
}

export default connect(mapStateToProps, { fetchLocations })(LocationList);
