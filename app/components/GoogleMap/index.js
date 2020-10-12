import React, { useEffect, useState } from 'react';
import GoogleMapReact  from 'google-map-react';
import { DirectionsRenderer  } from "react-google-maps";
import AddressPopup from '../AddressPopup';
import './index.scss';
import marker from '../../images/marker.png';


function GoogleMapForTransportation(props) {
  
  const[row, setRow] = useState('');
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsDisplay, setDirectionsDisplay ] = useState(null);

  useEffect(()=>{
    setRow(props.row);
    if(directionsService!=null && directionsDisplay!=null) renderRoute();
  });

  const saveMapRef = (map, maps) =>{
    setMapReference(map);
    setMapsReference(maps);
    setDirectionsService( new maps.DirectionsService());
    setDirectionsDisplay(new maps.DirectionsRenderer());
  };

  const center = {
    lat: 32.026240,
    lng: 34.764870,
  };

  const renderRoute = () => {
    // const directionsService = new mapsReference.DirectionsService();
    // const directionsDisplay = new mapsReference.DirectionsRenderer();
    directionsService.route({
      origin: {lat: row.fromLatitude, lng:row.fromLongitude},
      destination: {lat: row.toLatitude, lng:row.toLongitude},
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        const routePolyline = new mapsReference.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(mapReference);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  };

  const zoom = 10;

  const AnyReactComponent = () => 
    <div><img alt="" className="marker" src={marker}></img></div>;

  return(
    <div>
      <div className="containMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuFlqFYeLdRev7XbwK0GsPSWbrk4E9Xiw" }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>  saveMapRef(map, maps)}
        >
          <AnyReactComponent
            lat={row.fromLatitude}
            lng={row.fromLongitude}
          />
          <AnyReactComponent
            lat={row.toLatitude}
            lng={row.toLongitude}
          />
        </GoogleMapReact>
        {/* <AddressPopup/> */}
      </div>
    </div>
  );
}

export default (GoogleMapForTransportation);