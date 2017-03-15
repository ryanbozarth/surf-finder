import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/index'
import { Link } from 'react-router'

class LocationShow extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.params.spot_id);
  }

  renderConditions(conditions) {
    const label = (condition) => {
      switch(condition) {
        case 'Poor':
        return 'danger'
        case 'Poor-Fair':
        return 'warning'
        case 'Fair':
        return 'success'
      }
    }
    return (
      <h4>
      <span className={`label label-${label(conditions.swell)}`}>Swell</span>
      <span className={`label label-${label(conditions.tide)}`}>Tide</span>
      <span className={`label label-${label(conditions.wind)}`}>Wind</span>
    </h4>
    )
  }

  renderWarnings(warnings) {
    if(!warnings.length) {
      return <span className="text-sucess">No Warnings</span>
    }
    return warnings.map((warning, index) => {
      return <span className="conditions-warning text-warning" key={warning + index}>{warning}</span>
    })
  }

  renderTableRows(locations) {
    return locations.map((location, index) => {
      return (
        <tr key={location.spot_id + index}>
          <th>{location.hour} {location.day}</th>
          <th>{location.size} ft</th>
          <th>{this.renderConditions(location.shape_detail)}</th>
          <th>{this.renderWarnings(location.warnings)}</th>
        </tr>
      )
    })
  }

  renderLocation() {
    const { locations } = this.props;
    return (
      <div className="panel panel-default">
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Size</th>
            <th>Conditions</th>
            <th>Warnings</th>
          </tr>
        </thead>
          <tbody>
            {this.renderTableRows(locations)}
          </tbody>
      </table>
    </div>
    )
  }

  render() {
    if(!this.props.locations) {
      return <div><h3>Loading...</h3></div>
    }
    return (
      <div>
        <Link to="/" className="back-link">Back to Location List</Link>
        <h2>{this.props.locations[0].spot_name}</h2>
        <div className="">{this.renderLocation()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations.location }
}

export { LocationShow as StatelessLocationShow };
export default connect(mapStateToProps, { fetchLocation })(LocationShow);
