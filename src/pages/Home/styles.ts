import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

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

export const Name = styled.Text`
  color: #0A3FA5;
  text-align: center;
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(4)}px;
  margin-bottom: ${RFValue(4)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Stars = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: ${RFValue(4)}px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: ${RFValue(105)}px;
  margin-top: ${RFValue(14)}px;
  padding: 0 ${RFValue(16)}px;
  justify-content: space-around;
  margin-bottom: ${RFValue(16)}px;
`;

export const ButtonCard = styled.TouchableOpacity`
  width: ${RFValue(105)}px;
  height: ${RFValue(105)}px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  border: 1px solid #A8A8A8;
`;

export const Quantity = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(40)}px;
  line-height: ${RFValue(50)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerBlueLight = styled.View`
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  background-color: #2099FD;
  height: 20%;
  padding: 0 ${RFValue(12)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const ContainerBlueDark = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  height: 20%;
  padding: 0 ${RFValue(12)}px;
  justify-content: space-around;
  margin-bottom: ${RFValue(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentLeft = styled.View`

`;

export const ContentMiddle = styled.View`
  margin-right: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(26)}px;
  margin-bottom: ${RFValue(4)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Information = styled.Text`
  color: #fff;
  max-width: ${RFValue(165)}px; 
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(15.6)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.orange};
  width: ${RFValue(118)}px;
  height: ${RFValue(31)}px;
`;

export const TitleButton = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18.2)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContentRight = styled.View`

`;







