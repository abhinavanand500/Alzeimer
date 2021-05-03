import createDataContext from './createDataContext';
import trackerApi from '../apis/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigation/navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'signin':
      return {errMessage: '', token: action.payload};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};
const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = dispatch => {
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signup',
      });
    }
  };
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {token: '', errMessage: ''},
);
