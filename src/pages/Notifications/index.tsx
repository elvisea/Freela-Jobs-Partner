import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { Header } from '../../components/Header';
import TrashIcon from '../../assets/trash-icon.svg'

import {
  Container,
  ContainerCard,
  ContainerChat,
  ImageUser,
  Content,
  Name,
  Message,
  ContentLeft,
} from './styles';

export default function Notifications(): JSX.Element {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>Notifications</Header>
      <ContainerChat>
        <ContainerCard>
          <ContentLeft>
            <ImageUser source={{ uri: 'https://github.com/elvisea.png' }} />
            <Content>
              <Name>Armin Salahuddin</Name>
              <Message>Confirmação data 01/05/2021</Message>
            </Content>
          </ContentLeft>
          <TouchableOpacity onPress={() => navigation.navigate('Assessment')}>
            <TrashIcon color="#0A3FA5" />
          </TouchableOpacity>
        </ContainerCard>
      </ContainerChat>
    </Container>
  );
}
