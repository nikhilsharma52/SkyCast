import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={{ height: '500px', width: '500px', }}
        center={{
          lat: this.props.latandlong.lat,
          lng: this.props.latandlong.lon,
        }}
      >
        <Marker
          position={{
            lat: this.props.latandlong.lat,
            lng: this.props.latandlong.lon,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCnGFO-IkC7F9tzag9BUg3AE5gp4O2aRt4',
})(MapContainer);
