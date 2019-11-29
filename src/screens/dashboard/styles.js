import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #00b38f;
  margin-top: 20px;

  font-size: 24px;
  font-family: 'Roboto-Medium';
`;

export const WelcomeText = styled.Text`
  text-align: center;
  margin: 0px 0px 0px 0px;

  font-size: 18px;
  font-family: 'Roboto-Medium';
`;

export const Logout = styled.TouchableOpacity`
  margin-top: 40px;
  background: #00b38f;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const LogoutText = styled.Text`
  text-align: center;
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: #fff;
`;
