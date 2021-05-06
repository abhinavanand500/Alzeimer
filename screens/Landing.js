import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import LoginScreen from './LoginScreen';
const Landing = props => {
  console.log(props);
  const {signout} = useContext(AuthContext);
  return (
    <View>
      <Button title="SignOut" onPress={signout} />
    </View>
  );
};

export default Landing;
