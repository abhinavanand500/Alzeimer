import axios from 'axios';
import {AsyncStorage} from 'react-native';
const instance = axios.create({
  baseURL: 'http://c428bb5b82a6.ngrok.io',
});
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    console.log('Here error');
    return Promise.reject(err);
  },
);
export default instance;
