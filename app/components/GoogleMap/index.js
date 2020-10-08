import React from 'react';
import GoogleMapReact from 'google-map-react';

function GoogleMap() {

  const center = {
    lat: 32.026240,
    lng: 34.764870,
  };
    
  const renderMarkers = (map, maps) => {
    const marker = new maps.Marker({
      position: { lat: center.lat, lng: center.lng },
      map,
      title: 'Hello World!'
    });
    return marker;
  };
    
  const zoom = 11;

  return(
    <div>
      <div style={{ height: '750px', width: '750px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuFlqFYeLdRev7XbwK0GsPSWbrk4E9Xiw" }}
          defaultCenter={center}
          defaultZoom={zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default (GoogleMap);