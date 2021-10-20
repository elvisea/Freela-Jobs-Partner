import React from 'react';
import { Header } from '../../components/Header';
import IconFeather from 'react-native-vector-icons/Feather';
import {
  Avaliacao,
  Bottom,
  Container,
  Content,
  Date,
  Description,
  Name,
  Stars,
  Top,
  TopLeft,
  TopRight
} from './styles';

const Avaliacoes: React.FC = () => (
  <Container>
    <Header>Avaliações</Header>

    <Content>
      <Avaliacao>

        <Top>
          <TopLeft>
            <Name>Joao Da Silva Sauro</Name>
            <Stars>
              <IconFeather
                name="star"
                color="#FFBC00"
                size={16}
              />
              <IconFeather
                name="star"
                color="#FFBC00"
                size={16}
              />
              <IconFeather
                name="star"
                color="#FFBC00"
                size={16}
              />
              <IconFeather
                name="star"
                color="#FFBC00"
                size={16}
              />
              <IconFeather
                name="star"
                color="#FFBC00"
                size={16}
              />
            </Stars>
          </TopLeft>

          <TopRight>
            <Date>Data 20/08/2021</Date>
          </TopRight>
        </Top>

        <Bottom>
          <Description>
            Chegou no horário, atencioso e o serviço de qualidade.
          </Description>
        </Bottom>

      </Avaliacao>
    </Content>
  </Container>
);

export default Avaliacoes;
