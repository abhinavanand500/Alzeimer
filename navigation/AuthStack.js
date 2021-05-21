import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/OnBoarding';
import LoginScreen from '../screens/LoginScreen';
import TrackDetails from '../screens/TrackDetails';
import SignUpScreen from '../screens/SignUpScreen';
import Landing from '../screens/Landing';
const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setFirstLaunch] = useState(null);
  let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'OnBoarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="TrackDetails"
        component={TrackDetails}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Notifications')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});
export default AuthStack;
