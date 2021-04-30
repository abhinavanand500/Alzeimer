import createDataContext from './createDataContext';
import trackerApi from '../apis/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigation/navigationRef';
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'signup':
      return {errMessage: '', token: action.payload};
    default:
      return state;
  }
};
const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});
    console.log(response.data);
  } catch (err) {
    // console.log(err.message);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = dispatch => {
  return ({email, password}) => {};
};

const signout = dispatch => {
  return () => {};
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {token: null, errMessage: ''},
);
