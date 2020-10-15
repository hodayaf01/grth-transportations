import React, { useEffect, useState } from 'react';
import GoogleMapReact  from 'google-map-react';
import Geocode from "react-geocode";
import {FROM, TO, API_KRY, DRIVING, OK, DIRECTIONS_REQUESR_FAILED, API_KEY_MAP} from '../../Common/consts';
import './index.scss';
import marker from '../../images/marker.png';
// import NewMaps from '../NewMaps';

function GoogleMapForTransportation(props) {
  
  const[row, setRow] = useState('');

  const [selectedFromAddress, setSelectedFromAddress] = useState('');
  const [selectedToAddress, setSelectedToAddress] = useState('');

  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsDisplay, setDirectionsDisplay] = useState(null);

  useEffect(()=>{
    setRow(props.row);
    if(directionsService && directionsDisplay) renderRoute();
    if(row) {getPhysicalAddress(FROM); getPhysicalAddress(TO);}
  });

  const saveMapRef = (map, maps) =>{
    setMapReference(map);
    setMapsReference(maps);
    setDirectionsService( new maps.DirectionsService());
    setDirectionsDisplay(new maps.DirectionsRenderer());
  };

  const getPhysicalAddress = (direction) => {
    if(row){
      Geocode.setApiKey(API_KRY);
      Geocode.setLanguage("en");
      Geocode.setRegion("es");
      Geocode.enableDebug();
      const latlng = direction === FROM ? 
        {lat: row.fromLatitude, lng: row.fromLongitude} : 
        {lat: row.toLatitude, lng: row.toLongitude} ;
      Geocode.fromLatLng(latlng.lat, latlng.lng).then(
        response => {

          const address = response.results[0].formatted_address;
          if(direction === FROM)  setSelectedFromAddress(address); 
          else setSelectedToAddress(address);
        },
        error => {
          console.error(error);
        }
      );
    }
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
      travelMode: DRIVING
    }, (response, status) => {
      if (status === OK) {
        directionsDisplay.setDirections({routes: []});
        directionsDisplay.setDirections(response);
        const routePolyline = new mapsReference.Polyline({
          path: response.routes[0].overview_path
        });
        routePolyline.setMap(mapReference);
      } else {
        alert(`${DIRECTIONS_REQUESR_FAILED} status`);
      }
    });
  };

  const zoom = 10;

  const Markers = ({text}) => 
    <div className="containMarker">
      <span className="containMarkerText">{text === FROM ? selectedFromAddress : selectedToAddress}</span>
      <img alt="" className="marker" src={marker}></img>
    </div>;

  return(
    <div>
      <div className="containMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY_MAP }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => saveMapRef(map, maps)}
        >
          <Markers
            lat={row.fromLatitude}
            lng={row.fromLongitude}
            text={FROM}
          />
          <Markers
            lat={row.toLatitude}
            lng={row.toLongitude}
            text={TO}
          />
        </GoogleMapReact>

      </div>
    </div>
  );
}

export default (GoogleMapForTransportation);