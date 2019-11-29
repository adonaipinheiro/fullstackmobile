import styled from 'styled-components/native';
import { BarIndicator } from 'react-native-indicators';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled(BarIndicator).attrs({
  size: 32,
  count: 4,
  color: '#00b38f',
})`
  margin-top: 10px;
  max-height: 40px;
`;
