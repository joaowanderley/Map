import React, {useState, useEffect} from 'react'
import {View, Text, ActivityIndicator, Alert } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'

import Directions from '../direction'
import Details from '../detail'
import styles from './styles'


const origin = {latitude: -9.479928, longitude: -35.852523}
const destination = {latitude: -9.6594056, longitude: -35.7040234}

const initalState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0143,
  longitudeDelta: 0.0134
}

Geocoder.init("AIzaSyCD7BQPSipJpv1WRYVfpY8wzV-2bLxTIv8")

function Mapa({route, navigation}) {

  const {titulo} = route.params


  const [currentPosition, setCurrentPosition] = useState(initalState)
  const [duration, setDuration] = useState(null)

  useEffect(() => {
    async function handlePosition() {
      Geolocation.getCurrentPosition(
       async info => {
        const {longitude, latitude} = info.coords
        const response = await Geocoder.from({ latitude, longitude })
        const address = response.results[0].formatted_address
        console.log(address)
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        })
      },
      error =>console.log(error),
    )
    }
    handlePosition()    
  }, [])


  return currentPosition.latitude ? (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={currentPosition}
      showsUserLocation
      ref={el => this.mapView = el}
    >
      <Directions 
        origin={origin}
        destination={destination}
        ondReady={(result) => {
          setDuration(Math.floor(result.duration))
          this.mapView.fitToCoordinates(result.coordinates)
        }}
      />
    </MapView>
    <Details />
    <View style={styles.content}>
      <Text>Tempo estimado: {duration} minutos</Text>
    </View>
  </View>
  ) : <ActivityIndicator style={{ flex: 1 }} animating size='large' />
}

export default Mapa