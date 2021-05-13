import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import {Context as LocationContext} from '../context/LocationContext';
const TrackForm = () => {
  const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <View style={styles.container}>
      <FormInput
        value={name}
        onChangeText={changeName}
        placeholderText="Record This Session"
        iconType="playcircleo"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {recording ? (
        <FormButton buttonTitle="Stop" onPress={stopRecording} />
      ) : (
        <FormButton buttonTitle="Record" onPress={startRecording} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingTop: 50,
  },
});
export default TrackForm;
