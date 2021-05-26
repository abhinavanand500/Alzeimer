import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Bottom/Home';
import Account from './Bottom/Account';
import Maps from './Bottom/Maps';
import Record from './Bottom/Record';
const Landing = () => {
  // const {state, signin} = useContext(AuthContext);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Record}
        options={{
          tabBarLabel: 'Record',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="recording" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Maps}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => <Icon name="map" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Landing;
