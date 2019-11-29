import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: ${height - 35};
`;

export const AreaTitle = styled.Text`
  text-align: center;
  margin: 20px 0px 20px 0px;
  color: #333;

  font-size: 14px;
  font-family: 'Roboto-Medium';
`;

export const ChooseArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ChooseItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 100px;
  width: 100px;
  margin: 0px 10px 0px;
  border-radius: 5px;
  border-color: ${props => (props.choose ? '#00b38f' : '#ddd')};
  border-width: 5px;

  justify-content: center;
  align-items: center;
`;

export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 40px;
  background: #00b38f;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const SignUpButtonText = styled.Text`
  text-align: center;
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: #fff;
`;
