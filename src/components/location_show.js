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
      <span className={"label label-" + label(conditions.swell)}>Swell</span>
      <span className={"label label-" + label(conditions.tide)}>Tide</span>
      <span className={"label label-" + label(conditions.wind)}>Wind</span>
    </h4>
    )
  }

  renderWarnings(warnings) {
    if(!warnings.length) {
      return <span className="text-sucess">No Warnings</span>
    }
    return warnings.map((warning, index) => {
      return <span className="conditions-warning text-warning" key={index}>{warning}</span>
    })
  }

  renderLocation() {
    const { locations } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{location.spot_name}</div>
      <table className="table">
        <thead>
          <th>Time</th>
          <th>Size</th>
          <th>Conditions</th>
          <th>Warnings</th>
        </thead>
          <tbody>
            {locations.map((location) => {
              return (
                <tr>
                  <th>{location.hour} {location.day}</th>
                  <th>{location.size} ft</th>
                  <th>{this.renderConditions(location.shape_detail)}</th>
                  <th>{this.renderWarnings(location.warnings)}</th>
                </tr>
              )
            })}
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
        <Link to="/">Back to Location List</Link>
        <div className="">{this.renderLocation()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations.location }
}

export default connect(mapStateToProps, { fetchLocation })(LocationShow);
