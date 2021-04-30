import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import Landing from '../screens/Landing';
import {Context as AuthContext} from '../context/AuthContext';

const Routes = () => {
  const {state, signup} = useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      {state.token ? <Landing /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
