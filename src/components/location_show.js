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
      <div>
      <span className={"badge badge-" + label(conditions.swell)}>Swell</span>
      <span className={"badge badge-" + label(conditions.tide)}>Tide</span>
      <span className={"badge badge-" + label(conditions.wind)}>Wind</span>
      </div>
    )
  }

  renderWarnings(warnings) {
    if(!warnings.length) {
      return <span className="badge badge-success">No Warnings</span>
    }
    return warnings.map((warning, index) => {
      return <span className="badge badge-warning" key={index}>{warning}</span>
    })
  }

  renderLocation() {
    const { locations } = this.props;
    return locations.map((location) => {
      return (
        <div className="card justify-content-start">
          <div className="card-header">
            <h3>{location.date.slice(0, location.date.length - 5)}</h3>
            <p>{location.day}, {location.hour}</p>
          </div>
         <div className="card-block">
           <h4 className="card-title">Size: {location.size} ft</h4>
           <p className="card-text">Conditions: {this.renderConditions(location.shape_detail)}</p>
         </div>
         <div className="card-footer">
           <p className="text-warning">Warning: {this.renderWarnings(location.warnings)}</p>
         </div>
       </div>
      )
    })
  }

  render() {
    if(!this.props.locations) {
      return <div><h3>Loading...</h3></div>
    }
    return (
      <div>
        <Link to="/">Back to Location List</Link>
        <div className="card-wrapper">{this.renderLocation()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations.location }
}

export default connect(mapStateToProps, { fetchLocation })(LocationShow);
