import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCD7BQPSipJpv1WRYVfpY8wzV-2bLxTIv8'

const Directions = ({destination, origin, ondReady }) => (
  <MapViewDirections 
    destination={destination}
    origin={origin}
    onReady={ondReady}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor='#222'
  />

)


export default Directions