import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from '../actions/index'
import { Link } from 'react-router'

const LocationItem = ({location}) => (
  <li className="list-group-item" key={location.spot_id}>
    <Link to={"location/" + location.spot_id}>
      <span>{location.spot_name}</span>
      <span className="text-right">{location.shape}</span>
    </Link>
  </li>
);

class LocationList extends Component {
  componentWillMount() {
    this.props.fetchLocations();
  }

  renderLocationList(){
    return this.props.locations.map((location) => {
      return <LocationItem location={location} />
    })
  }

  render() {
    return (
      <div>
        <h2>Top Locations</h2>
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

export { LocationList as StatelessLocationList };
export default connect(mapStateToProps, { fetchLocations })(LocationList);
