import { StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: 'My Location'
  }

  return (
    <MapView initialRegion={coordinates} style={styles.mapStyles}>
      <Marker coordinate={coordinates} title={coordinates.title} />
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyles: {
    ...StyleSheet.absoluteFillObject
  }
})
