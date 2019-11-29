import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from '../../assets/images/icon.svg';

import { Container, Loader } from './styles';

export default function Preload({ navigation }) {
  useEffect(() => {
    checkToken();
  }, []);

  checkToken = async () => {
    const token = await AsyncStorage.getItem('@token');

    if (token) {
      navigation.navigate('Dashboard');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <Container>
      <Logo width={100} height={100} />
      <Loader />
    </Container>
  );
}

Preload.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
