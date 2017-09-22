import React, { Component } from 'react'
import './GoogleMaps.css'

const google = window.google

class GoogleMap extends Component {
  
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // ref gives direct reference to this.refs.map
    return (
      <div>
        <div id="maps" ref="map" />
        <h6>{this.props.city}</h6>
      </div>
    )
  }
}

export default GoogleMap