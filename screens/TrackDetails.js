/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';
const TrackDetails = props => {
  console.log(props.route.params._id);
  const {state} = useContext(TrackContext);
  const _id = props.route.params._id;
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  const length = track.locations.length;
  const finalCoords = track.locations[length - 1].coords;
  console.log(finalCoords);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}> {track.name}</Text>

      <View
        style={{
          padding: 10,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <MapView
        initialRegion={{
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
          ...initialCoords,
        }}
        region={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}>
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 20,
  },
  map: {
    height: 300,
  },
});
export default TrackDetails;
