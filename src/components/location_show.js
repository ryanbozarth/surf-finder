import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/index'

class LocationShow extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.spot_id);
    setTimeout(function() {console.log(this.props.spot_id)}, 2000);
  }

  render() {
    if(!this.props.location) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>show post {this.props.location.spot_id}</h3>
        <h3>{this.props.location.size}</h3>
        <h3>{this.props.location.shape_full}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { location: state.locations.location }
}

export default connect(mapStateToProps, { fetchLocation })(LocationShow);
