import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import Routes from './routes';

import Container from './components/Container';

// Desabilitando a YellowBox
console.disableYellowBox = true;

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </Container>
  );
}
