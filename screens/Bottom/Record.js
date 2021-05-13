import React, {useContext, useState} from 'react';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {useIsFocused} from '@react-navigation/native';
import useLocation from '../../hooks/useLocation';
import {Context as LocationContext} from '../../context/LocationContext';
import Maps from '../../components/Map';
const Record = () => {
  // const [isFocused, setIsFocused] = useState(false);
  const {addLocation} = useContext(LocationContext);
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Start Tracking</Text>
      <Maps />
      {err ? <Text>Please Enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default Record;
