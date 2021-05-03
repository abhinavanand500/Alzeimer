import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
// import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import LoginScreen from './LoginScreen';
const Landing = () => {
  const signout = useContext(AuthContext);
  return (
    <View>
      <Button
        title="SignOut"
        onPress={() => {
          signout;
          return <LoginScreen />;
        }}
      />
    </View>
  );
};

export default Landing;
