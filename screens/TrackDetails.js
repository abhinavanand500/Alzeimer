import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
const TrackDetails = props => {
  console.log(props.route.params._id);
  const {state} = useContext(TrackContext);
  const _id = props.route.params._id;
  const track = state.find(t => t._id === _id);
  return (
    <View>
      <Text>{track.name}</Text>
    </View>
  );
};

export default TrackDetails;
