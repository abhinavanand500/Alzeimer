import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';
const Map = () => {
  const [data, dataSet] = useState(null);
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     await Geolocation.getCurrentPosition(info => dataSet(info));
  //   }
  //   fetchMyAPI();
  // }, []);

  const {
    state: {currentLocation, locations},
  } = useContext(LocationContext);
  // if (locations[0] && locations.length < 5) {
  //   const start = locations[0];
  //   console.log(start);
  // }
  if (locations[0]) {
    const start = locations[0];
    const last = locations[locations.length - 1];
    console.log('Start', start);
    console.log('Last', last);
  }

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }
  // console.log(start);
  // dataSet(currentLocation);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
