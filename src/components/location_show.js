import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/index'
import { Link } from 'react-router'

class LocationShow extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.params.spot_id);
  }

  renderLocation() {
    const { location } = this.props;
    return location.map((location) => {
      return (
        <div>
          <Link to="/">Back to Location List</Link>
            <div className="card -flex justify-content-start">
              <div className="card-header">
                <h3>{location.date}</h3>
                <p>{location.day}, {location.hour}</p>
              </div>
             <div className="card-block">
               <h4 className="card-title">Size (ft): {location.size}</h4>
               <p className="card-text">Shape: {location.shape_full}</p>
             </div>
             <div className="card-footer">
               <p className="text-warning">Warning: {location.spot_id}</p>
             </div>
           </div>
        </div>
      )
    })
  }

  render() {
    if(!this.props.location) {
      return <div><h3>Loading...</h3></div>
    }
    return (
      <div>{this.renderLocation()}</div>
    )
  }
}

function mapStateToProps(state) {
  return { location: state.locations.location }
}

export default connect(mapStateToProps, { fetchLocation })(LocationShow);
