import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import Welcome from '../../assets/Welcome.svg';
import Location from '../../assets/Location.svg';
import {windowHeight, windowWidth} from '../../utils/Dimension';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 style={styles.textUp}>
          Welcome To Tracker App
        </Text>
        <Welcome
          height={windowHeight / 2}
          width={windowWidth / 1.2}
          style={styles.welcome}
          fill="#000"
        />
      </View>
      <View style={styles.innercontainer}>
        <Text h2 style={styles.heading}>
          OUR MOTIVE
        </Text>
        <View style={styles.image}>
          <Location
            height={windowHeight / 2}
            width={windowWidth / 1.2}
            style={styles.welcome}
            fill="#000"
          />
        </View>
        <View style={styles.text}>
          <Text h4 style={styles.content}>
            This app is created in order to track any person and alert the
            family members, if that person tries to go outside certain area
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: '900',
  },
  innercontainer: {
    margin: 20,
  },
  content: {
    fontWeight: '500',
  },
  welcome: {
    height: 30,
    resizeMode: 'center',
    width: 30,
    flex: 1,
    aspectRatio: 1,
  },
  textUp: {
    margin: 10,
    padding: 20,
    borderRadius: 40,
    backgroundColor: 'orange',
    color: 'green',
  },
  container: {
    alignItems: 'center',
  },
});
export default Home;
