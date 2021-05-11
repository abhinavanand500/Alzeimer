import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Geolocation from '@react-native-community/geolocation';
import Maps from '../../components/Map';
const Record = () => {
  const [longitude, setLongitude] = useState(85.3098);
  const [latitude, setLatitude] = useState(23.3573);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const success = position => {
        // console.log(position);
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      };
      const error = err => {
        console.log(err);
      };

      await Geolocation.watchPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        distanceFilter: 2,
      });
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Start Tracking</Text>
      <Maps longitude={longitude} latitude={latitude} />
      {err ? <Text>Please Enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default Record;
