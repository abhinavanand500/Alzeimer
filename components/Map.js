import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as UserContext} from '../context/UserContext';
const Map = () => {
  const {state, getInfoUser} = useContext(UserContext);
  const {
    state: {currentLocation, locations},
    sendLocation,
  } = useContext(LocationContext);
  useEffect(() => {
    const aa = async () => {
      await getInfoUser();
    };
    aa();
  }, [state.user.email]);
  const distance = (lat1, lat2, lon1, lon2) => {
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    let r = 6371;

    return c * r;
  };

  // console.log('From map', state.user.dist);
  if (locations[0]) {
    const start = locations[0];
    const last = locations[locations.length - 1];
    const dist = distance(
      start.coords.latitude,
      last.coords.latitude,
      start.coords.longitude,
      last.coords.longitude,
    );
    // console.log('Last', last);
    // console.log('Cur', currentLocation);
    if (
      dist > state.user.dist &&
      last.coords.latitude === currentLocation.coords.latitude &&
      last.coords.longitude === currentLocation.coords.longitude
    ) {
      console.log('Distance at last', dist);
      sendLocation({currentLocation, dist});
    }
  }
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

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
