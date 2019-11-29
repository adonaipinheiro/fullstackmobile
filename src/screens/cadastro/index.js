import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  AreaTitle,
  SignUpButton,
  SignUpButtonText,
  ChooseArea,
  ChooseItem,
} from './styles';

import Logo from '../../assets/images/icon.svg';
import Pacient from '../../assets/images/pacient.svg';
import Supplier from '../../assets/images/supplier.svg';

export default function Cadastro({ navigation }) {
  const [chooseOne, setChooseOne] = useState(false);
  const [chooseTwo, setChooseTwo] = useState(false);

  handleCadastro = () => {
    if (!chooseOne && !chooseTwo) {
      Alert.alert('Atenção', 'Você deve escolher uma opção.');
    } else {
      navigation.navigate('ConfirmarCadastro', {
        chooseOne,
      });
    }
  };

  return (
    <Container>
      <Logo width={70} height={70} />
      <AreaTitle>Cliente ou Fornecedor?</AreaTitle>
      <ChooseArea>
        <ChooseItem
          onPress={() => {
            if (chooseTwo) {
              setChooseTwo(false);
              chooseOne ? setChooseOne(false) : setChooseOne(true);
            } else {
              chooseOne ? setChooseOne(false) : setChooseOne(true);
            }
          }}
          choose={chooseOne}
        >
          <Pacient width={70} height={70} />
        </ChooseItem>
        <ChooseItem
          onPress={() => {
            if (chooseOne) {
              setChooseOne(false);
              chooseTwo ? setChooseTwo(false) : setChooseTwo(true);
            } else {
              chooseTwo ? setChooseTwo(false) : setChooseTwo(true);
            }
          }}
          choose={chooseTwo}
        >
          <Supplier width={70} height={70} />
        </ChooseItem>
      </ChooseArea>
      <SignUpButton onPress={handleCadastro}>
        <SignUpButtonText>Confirmar</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}
