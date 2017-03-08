import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../actions/index'
import { Link } from 'react-router';

class LocationList extends Component {
  componentWillMount() {
    this.props.fetchLocation();
  }

  renderLocationList(){
    return this.props.locations.map((location) => {
      return (
        <li className="list-group-item" key={spot_id}>
          <span className="pull-xs-right">{location.spot_id}</span>
          <strong>{location.spot_name}</strong>
        </li>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Locations</h3>
        <ul className="list-group">
          {this.renderLocationList}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations.all }
}

export default connect(mapStateToProps, { fetchLocation })(LocationList);
