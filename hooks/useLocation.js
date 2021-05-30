/* eslint-disable react-hooks/exhaustive-deps */
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
        distanceFilter: 0.5,
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
      //stWatching
      if (subscriber) {
        Geolocation.clearWatch(subscriber);
        setSubscriber(null);
      }
    }
    return () => {
      if (subscriber) {
        Geolocation.clearWatch(subscriber);
      }
    };
  }, [shouldTrack, callback]);
  return [err];
};
