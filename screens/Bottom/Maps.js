import React, {useEffect, useContext} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Text} from 'react-native-elements';
import {Context as TrackContext} from '../../context/TrackContext';
import {ListItem} from 'react-native-elements';
const Maps = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, []);
  // console.log(state);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <View style={styles.container}>
        <Text h2>Hii Maps</Text>
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.list}>
        <FlatList
          // style={{flex: 1}}
          data={state}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TrackDetails', {_id: item._id})
                }>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 20,
  },
  list: {
    padding: 2,
  },
});
export default Maps;
