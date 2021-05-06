import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
// import {requestPermissionsAsync} from 'expo-location';
import Maps from '../../components/Map';
const Record = () => {
  const [err, setErr] = useState(null);
  // const startWatching = async () => {
  //   try {
  //     const {granted} = await requestPermissionsAsync();
  //     if (!granted) {
  //       throw new Error('Location permission not granted');
  //     }
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };

  // useEffect(() => {
  //   startWatching();
  // }, []);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Start Tracking</Text>
      <Maps />
      {err ? <Text>Please Enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default Record;
