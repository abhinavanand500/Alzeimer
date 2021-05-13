import React, {useState, useEffect, useContext} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      callback;
      const error = err => {
        console.log(err);
      };

      const sub = await Geolocation.watchPosition(callback, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        distanceFilter: 2,
      });
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      //startWatching
      Geolocation.clearWatch(subscriber);
      setSubscriber(null);
    }
  }, [shouldTrack]);
  return [err];
};
