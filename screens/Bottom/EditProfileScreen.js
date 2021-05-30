/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {Context as UserContext} from '../../context/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FormButton from '../../components/FormButton';
import Animated from 'react-native-reanimated';

const EditProfileScreen = props => {
  // console.log(props);
  const [userData, setUserData] = useState({});
  const {state, getInfoUser, updateUser} = useContext(UserContext);
  useEffect(() => {
    const aa = async () => {
      await getInfoUser();
    };
    aa();
    setUserData(state.user);
  }, [state.user.email]);
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const upadateProfile = () => {
    if (userData !== {}) {
      updateUser({userData});
      props.navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <UserAvatar
                size={200}
                style={styles.userImg}
                // textStyle={{size: 150}}
                name={userData.name ? String(userData.name) : 'Abhinav Anand'}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="camera"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {userData ? userData.fname : ''} {userData ? userData.lname : ''}
          </Text>
          {/* <Text>{user.uid}</Text> */}
        </View>
        <KeyboardAvoidingView behavior="height">
          <ScrollView>
            <View>
              <View style={styles.action}>
                <FontAwesome name="user-circle" color="#333333" size={20} />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="grey"
                  autoCorrect={false}
                  value={userData.email ? userData.email : state.user.email}
                  onChangeText={txt => setUserData({...userData, email: txt})}
                  style={styles.textInput}
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#333333" size={20} />
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="#666666"
                  value={userData.name ? userData.name : state.user.name}
                  onChangeText={txt => setUserData({...userData, name: txt})}
                  autoCorrect={false}
                  style={styles.textInput}
                />
              </View>

              <View style={styles.action}>
                <Feather name="phone" color="#333333" size={20} />
                <TextInput
                  placeholder="Phone"
                  placeholderTextColor="#666666"
                  keyboardType="number-pad"
                  autoCorrect={false}
                  value={
                    userData.phone ? String(userData.phone) : state.user.phone
                  }
                  onChangeText={txt => setUserData({...userData, phone: txt})}
                  style={styles.textInput}
                />
              </View>

              <View style={styles.action}>
                <FontAwesome name="globe" color="#333333" size={20} />
                <TextInput
                  placeholder="Maximum Distance you want to travel"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  value={
                    userData.dist ? String(userData.dist) : state.user.dist
                  }
                  onChangeText={txt => setUserData({...userData, dist: txt})}
                  style={styles.textInput}
                />
              </View>
              <View style={styles.action}>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  color="#333333"
                  size={20}
                />
                <TextInput
                  placeholder="City"
                  placeholderTextColor="#666666"
                  autoCorrect={false}
                  value={userData.city ? userData.city : state.user.city}
                  onChangeText={txt => setUserData({...userData, city: txt})}
                  style={styles.textInput}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <FormButton buttonTitle="Update" onPress={upadateProfile} />
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  userImg: {
    marginTop: 10,
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
});
