import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
  timeout: 5000,
});

api.interceptors.request.use(
  async options => {
    const token = await AsyncStorage.getItem('@token');

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    return options;
  },
  error => {
    return console.log(error);
  }
);

export default api;
