import axios from 'axios';
import {AsyncStorage} from 'react-native';
const instance = axios.create({
  baseURL: 'http://57cb2ef7e5a6.ngrok.io',
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
