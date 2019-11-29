import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

// Api
import api from '../../../services/api';

import {
  Container,
  AreaTitle,
  SignUpButton,
  SignUpButtonText,
  AreaSignUp,
  AreaInput,
  Input,
  Icon,
} from './styles';

import Logo from '../../../assets/images/icon.svg';

const ConfirmarCadastro = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(false);

  handleCadastro = () => {
    setLoading(true);

    const data = {
      name,
      email,
      client: type,
      supplier: !type,
      password: pass,
    };

    api
      .signUp(data)
      .then(r => {
        api
          .login(email, pass)
          .then(async rLogin => {
            console.log(rLogin);
            await AsyncStorage.setItem('@token', rLogin.data.token);
            setLoading(false);
            navigation.navigate('Preload');
          })
          .catch(e => {
            console.log(e);
            setLoading(false);
          });
      })
      .catch(e => {
        console.log(e.response.data);
        Alert.alert('Atenção', e.response.data.error);
        setLoading(false);
      });
  };

  handleType = () => {
    const typeData = navigation.getParam('chooseOne', false);
    setType(typeData);
  };

  useEffect(() => {
    handleType();
  }, []);

  return (
    <Container>
      <Logo width={70} height={70} />
      <AreaTitle>Preencha com atenção e cuidado</AreaTitle>
      <AreaSignUp>
        <AreaInput>
          <Input
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            keyboardType="default"
            placeholder="Nome"
          />
          <Icon name="perm-identity" size={18} />
        </AreaInput>
        <AreaInput>
          <Input
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            keyboardType="email-address"
            placeholder="E-mail"
          />
          <Icon name="email" size={18} />
        </AreaInput>
        <AreaInput>
          <Input
            value={pass}
            onChangeText={text => {
              setPass(text);
            }}
            secureTextEntry
            keyboardType="default"
            placeholder="Senha"
          />
          <Icon name="vpn-key" size={18} />
        </AreaInput>
      </AreaSignUp>

      {!type && (
        <>
          <AreaInput>
            <Input
              value={address}
              onChangeText={text => {
                setAddress(text);
              }}
              keyboardType="default"
              placeholder="Endereço"
            />
            <Icon name="streetview" size={18} />
          </AreaInput>
          <AreaInput>
            <Input
              value={price}
              onChangeText={text => {
                setPrice(text);
              }}
              keyboardType="default"
              placeholder="Preço"
            />
            <Icon name="attach-money" size={18} />
          </AreaInput>
          <AreaInput>
            <Input
              value={capacity}
              onChangeText={text => {
                setCapacity(text);
              }}
              keyboardType="default"
              placeholder="Capacidade"
            />
            <Icon name="directions-car" size={18} />
          </AreaInput>
        </>
      )}

      <SignUpButton
        disabled={loading}
        loading={loading}
        onPress={handleCadastro}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
            <SignUpButtonText>Cadastrar</SignUpButtonText>
          )}
      </SignUpButton>
    </Container>
  );
};

ConfirmarCadastro.propTypes = {
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

export default ConfirmarCadastro;
