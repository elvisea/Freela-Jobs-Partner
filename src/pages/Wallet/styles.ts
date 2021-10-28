import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const YellowContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #FFBC00;
  height: ${RFValue(173)}px;
  margin-top: ${RFValue(16)}px;
  padding-top: ${RFValue(12)}px;
`;

export const WhiteTitle = styled.Text`
  color: #FFF;
  font-size: ${RFValue(26)}px;
  line-height: ${RFValue(33.8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: ${RFValue(50)}px; 
`;

export const Plan = styled.Text`
  color: #FFF;
  font-size: ${RFValue(54)}px;
  line-height: ${RFValue(65)}px; 
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const WhiteContainer = styled.View`
  align-items: center;
  justify-content: center;
  justify-content: center;
  height: ${RFValue(173)}px;
  padding: 0 ${RFValue(16)}px;
`;

export const BlueTitle = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(26)}px;
  line-height: ${RFValue(50)}px; 
  line-height: ${RFValue(33.8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Value = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(54)}px;
  line-height: ${RFValue(65)}px; 
  margin-right: ${RFValue(4)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const BlueContainer = styled.View`
  width: 100%;
  height: ${RFValue(124)}px;
  align-items: flex-start;
  background-color: #0A3FA5;
  padding: ${RFValue(0)}px ${RFValue(20)}px;
`;

export const TopContainer = styled.View`
  width: 100%; 
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #FFF;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextFreelas = styled.Text`
  color: #FFF;
  font-size: ${RFValue(40)}px;
  line-height: ${RFValue(65)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BottomContainer = styled.View`
  width: 100%; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ShareButton = styled(RectButton)`
  padding: 12px;
  align-items: center;
  justify-content: center;
  background-color: #FFBC00;
  height: ${RFValue(34)}px;
  border-radius: ${RFValue(26)}px;
`;

export const TextShareButton = styled.Text`
  color: #fff;
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LeftContent = styled.View`
  justify-content: flex-start;
`;

export const TitleBlueContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12.5)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextBlueContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16.25)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RightContent = styled.View`
  
`;

export const TopValue = styled.Text`
  color: #fff;
  font-size: ${RFValue(46)}px;
  line-height: ${RFValue(59.8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const YellowContentLeft = styled.View`

`;

export const YellowContentRight = styled.View`

`;


export const TitleYellowContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextYellowContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
