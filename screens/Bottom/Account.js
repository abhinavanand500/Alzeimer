import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import FormButton from '../../components/FormButton';
import {Context as AuthContext} from '../../context/AuthContext';
const Account = () => {
  const {state, signout} = useContext(AuthContext);
  return (
    <View>
      <Text>Hii Account</Text>
      <FormButton buttonTitle="Sign out" onPress={signout} />
    </View>
  );
};

export default Account;
