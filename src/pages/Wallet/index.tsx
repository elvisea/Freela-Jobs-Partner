import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';
import carteiraImg from '../../assets/carteira.png';

import {
  Container,
  WhiteTitle,
  Value,
  Text,
  BlueContainer,
  TextBlueContainer,
  ShareButton,
  TextShareButton,
  WhiteContainer,
  TopContainer,
  LeftContent,
  TopValue,
  YellowContainer,
  YellowContentLeft,
  YellowContentRight,
  TextYellowContainer,
  Plan,
  BlueTitle,
  BottomContainer,
  TextFreelas,
} from './styles';

interface Credits {
  status: boolean;
  error: string | null;
  data: {
    pk: number;
    current_points: number;
    total_points: number;
    credits: number;
  } | null;
}

const Wallet: React.FC = () => {
  const { user } = useAuth();

  const [credits, setCredits] = useState<Credits>();
  useEffect(() => {
    const data = {
      pk: user.data.pk,
    };

    api.post('/mobile/requisitions/ReqPocket.php', data)
      .then((response) => setCredits(response.data));
  }, []);

  return (
    <Container>
      <Header>Carteira</Header>

      <YellowContainer>
        <WhiteTitle>Seu Plano Atual</WhiteTitle>
        <Plan>Gold</Plan>
      </YellowContainer>

      <WhiteContainer>
        <BlueTitle>Saldo Freela Coins</BlueTitle>
        <Value>30</Value>
      </WhiteContainer>

      <BlueContainer>
        <TopContainer>
          <Text>
            Indique e ganhe Freela Coins!{'\n'}
            Ajude seu amigo indicando o melhor app{'\n'}
            de serviços e ganhe 10 Freela Coins.
          </Text>
          <TextFreelas>10</TextFreelas>
        </TopContainer>

        <BottomContainer>
          <ShareButton>
            <TextShareButton>Compartilhar</TextShareButton>
          </ShareButton>
          <ShareButton>
            <TextShareButton>Copiar e Compartilhar</TextShareButton>
          </ShareButton>
        </BottomContainer>
        {/* <TopBlueContainer>
          <LeftContent>
            <WhiteTitleBlueContainer>
              Indique e ganhe Freela Coins!
            </WhiteTitleBlueContainer>
            <TextBlueContainer>
              Ajude seu amigo indicando o melhor app
              {'\n'}
              de serviços e ganhe 10 Freela coins.
            </TextBlueContainer>
          </LeftContent>

          <TopValue>10</TopValue>
        </TopBlueContainer>

        <ShareButton>
          <TextShareButton onPress={() => { }}>Compartilhar</TextShareButton>
        </ShareButton> */}
      </BlueContainer>
    </Container>
  );
};

export default Wallet;
