import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 ${RFValue(24)}px;
  height: ${RFValue(138.27)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageUser = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(6)}px;
  margin-top: ${RFValue(-110)}px;
`;

export const Title = styled.Text`
  color: #0A3FA5;
  text-align: center;
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerCards = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: ${RFValue(105)}px;
  margin-top: ${RFValue(24)}px;
  padding: 0 ${RFValue(16)}px;
  justify-content: space-around;
  margin-bottom: ${RFValue(16)}px;
`;

export const Card = styled.View`
  flex-direction:column;
  align-items: center;
  border-radius: 9px;
  padding: ${RFValue(8)}px;
  width: ${RFValue(105)}px;
  height: ${RFValue(105)}px;
  border: 1px solid #A8A8A8;
`;

export const Quantity = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(40)}px;
  margin: 0px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(14)}px;
  margin: ${RFValue(0)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerBlueLight = styled.View`
  width: 100%;
  padding: ${RFValue(14)}px;
  height: ${RFValue(115)}px;
  background-color: #2099FD;
  margin-bottom: ${RFValue(2)}px;
`;

export const ContainerBlueDark = styled.View`
  width: 100%;
  padding: ${RFValue(14)}px;
  height: ${RFValue(115)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;



