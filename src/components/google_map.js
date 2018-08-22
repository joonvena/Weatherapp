import React, { Component } from 'react'

export default class GoogleMap extends Component {
  
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            streetViewControl: false,
            zoomControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
  
    render() {
    
    return <div ref="map" />;
  }
}