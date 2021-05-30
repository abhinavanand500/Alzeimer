import trackerApi from '../apis/tracker';
import createDataContext from './createDataContext';
const userReducer = (state, action) => {
  switch (action.type) {
    case 'get_user':
      console.log(action.payload);
      return {...state, user: action.payload};
    default:
      return state;
  }
};

const getInfoUser = dispatch => async () => {
  console.log('Getingins');
  try {
    const response = await trackerApi.get('/getdetails');
    dispatch({type: 'get_user', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

export const {Context, Provider} = createDataContext(
  userReducer,
  {getInfoUser},
  {user: {}},
);
