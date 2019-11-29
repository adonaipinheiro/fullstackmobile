import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: ${height - 35};
`;

export const AreaLogin = styled.View``;

export const AreaTitle = styled.Text`
  text-align: center;
  margin: 20px 0px 20px 0px;
  color: #333;

  font-size: 14px;
  font-family: 'Roboto-Medium';
`;

export const AreaInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;

  border-bottom-color: #eee;
`;

export const Input = styled.TextInput`
  width: 90%;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(MIcon).attrs({
  size: 18,
  color: '#00b38f',
})``;

export const ForgetText = styled.Text`
  text-align: center;
  font-family: 'Roboto-Regular';
  color: #222;
`;

export const ForgetButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const LoginButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 40px;
  background: #00b38f;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const LoginButtonText = styled.Text`
  text-align: center;
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: #fff;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpText = styled.Text`
  font-family: 'Roboto-Regular';
  text-align: center;
`;

export const SignUpAlt = styled.Text`
  color: #00b38f;
`;
