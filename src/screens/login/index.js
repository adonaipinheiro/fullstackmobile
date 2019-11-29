import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

// Api
import api from '../../services/api';

import {
  Container,
  AreaLogin,
  AreaTitle,
  AreaInput,
  Input,
  Icon,
  ForgetText,
  LoginButton,
  LoginButtonText,
  ForgetButton,
  SignUpButton,
  SignUpText,
  SignUpAlt,
} from './styles';

import Logo from '../../assets/images/icon.svg';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  handleLogin = () => {
    setLoading(true);

    api
      .login(email, pass)
      .then(async r => {
        console.log(r.data);
        await AsyncStorage.setItem('@token', r.data.token);
        setLoading(false);
        navigation.navigate('Preload');
      })
      .catch(e => {
        console.log(e.response.data);
        setLoading(false);
        Alert.alert('Atenção', 'E-mail ou senha inválidos');
      });
  };

  return (
    <Container>
      <Logo width={100} height={100} />
      <AreaTitle>Bem-vindo, entre com seu e-mail e senha</AreaTitle>
      <AreaLogin>
        <AreaInput>
          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Icon name="email" size={18} />
        </AreaInput>
        <AreaInput>
          <Input
            secureTextEntry
            placeholder="Senha"
            value={pass}
            onChangeText={text => {
              setPass(text);
            }}
            returnKeyType="go"
            onEndEditing={handleLogin}
          />
          <Icon name="vpn-key" size={18} />
        </AreaInput>
      </AreaLogin>
      <ForgetButton>
        <ForgetText>Esqueceu sua senha?</ForgetText>
      </ForgetButton>

      <LoginButton disabled={loading} loading={loading} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <LoginButtonText>Entrar</LoginButtonText>
        )}
      </LoginButton>

      <SignUpButton onPress={handleCadastro}>
        <SignUpText>
          Crie uma conta! <SignUpAlt>Criar</SignUpAlt>
        </SignUpText>
      </SignUpButton>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
