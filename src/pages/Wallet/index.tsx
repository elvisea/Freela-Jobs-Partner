import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';

import LogoBlue from '../../assets/logo-blue.svg';
import LogoWallet from '../../assets/logo-wallet.svg';
import LogoWhite from '../../assets/freela-icon-partner.svg';

import {
  Container,
  WhiteTitle,
  Value,
  Text,
  BlueContainer,
  WhiteContainer,
  TopContainer,
  YellowContainer,
  Plan,
  BlueTitle,
  BottomContainer,
  TextFreelas,
  ShareButton,
  TextShareButton,
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <LogoWallet width={58} height={58} />
          <Plan>Gold</Plan>
        </View>
      </YellowContainer>

      <WhiteContainer>
        <BlueTitle>Saldo Freela Coins</BlueTitle>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Value>30</Value>
          <LogoBlue width={36} height={36} />
        </View>
      </WhiteContainer>

      <BlueContainer>
        <TopContainer>
          <Text>
            Indique e ganhe Freela Coins!{'\n'}
            Ajude seu amigo indicando o melhor app{'\n'}
            de serviços e ganhe 10 Freela Coins.
          </Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <TextFreelas>10</TextFreelas>
            <LogoWhite width={26} height={26} />
          </View>
        </TopContainer>

        <BottomContainer>
          <ShareButton style={{ width: '45%' }}>
            <TextShareButton>Compartilhar</TextShareButton>
          </ShareButton>
          <ShareButton style={{ width: '45%' }}>
            <TextShareButton>Copiar e Compartilhar</TextShareButton>
          </ShareButton>
        </BottomContainer>
      </BlueContainer>
    </Container>
  );
};

export default Wallet;
