import React from 'react';
import GoogleMapReact  from 'google-map-react';
import { DirectionsRenderer  } from "react-google-maps";
import AddressPopup from '../AddressPopup';

// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'


function GoogleMapForTransportation() {
  
  const center = {
    lat: 32.026240,
    lng: 34.764870,
  };

  const markersToDraw = [
    {id: 1, lat: 32.026240,lng: 34.764870,},
    {id: 2, lat: 33.026240,lng: 35.764870,}];
    
  const renderMarkers = (map, maps, markersToDraw) => {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    const markers =[];
    markersToDraw.forEach((item) => {
      const marker = new maps.Marker({
        position: { lat: item.lat, lng: item.lng },
        map,
        title: 'Hello World!'
      });
      markers.push(marker);
    });
    return markers;
  };

  const renderRoute = (map, maps, markersToDraw) =>{
    console.log('test')
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    directionsService.route({
      origin: 'New Orleans, LA',
      destination: 'Memphis, TN',
      waypoints: [{location: 'Mobile AL'}],
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        const routePolyline = new maps.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(map);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  const zoom = 10;

  return(
    <div>
      <div style={{ height: '750px', width: '750px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuFlqFYeLdRev7XbwK0GsPSWbrk4E9Xiw" }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, markersToDraw)}
          onGoogleApiLoaded={({ map, maps }) => renderRoute(map, maps, markersToDraw)}
        >
        </GoogleMapReact>
        <AddressPopup/>
      </div>
    </div>
  );
}

export default (GoogleMapForTransportation);