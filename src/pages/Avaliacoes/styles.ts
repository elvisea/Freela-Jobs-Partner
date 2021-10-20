import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
`;

export const Avaliacao = styled.View`
  height: ${RFValue(90)}px;
  width: 100%;
  border-radius: 17.33px;
  background-color: #fff;
  padding: ${RFValue(12)}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
`;

export const Top = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px ;
`;

export const TopLeft = styled.View`
  align-items: flex-start;
`;

export const TopRight = styled.View`

`;

export const Bottom = styled.View`
  width: 100%;
`;

export const Name = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
