import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import {
  Container,
  LogoArea,
  Title,
  WelcomeText,
  Logout,
  LogoutText,
} from './styles';

import Logo from '../../assets/images/icon.svg';

const Dashboard = ({ navigation }) => {
  handleLogout = async () => {
    await AsyncStorage.removeItem('@token');
    navigation.navigate('Preload');
  };

  return (
    <Container>
      <LogoArea>
        <Logo width={75} height={75} />
        <Title>Bem-vindo!</Title>
        <WelcomeText>Usuário logado com sucesso!</WelcomeText>
      </LogoArea>
      <Logout onPress={handleLogout}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default Dashboard;
