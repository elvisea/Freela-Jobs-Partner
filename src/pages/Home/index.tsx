import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';

import ChatIcon from '../../assets/chat.svg';
import AlertIcon from '../../assets/alert.svg';
import FreelasIcon from '../../assets/freelas.svg';

import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  View,
} from 'react-native';

import api from '../../services/api';

import {
  ButtonCard,
  Container,
  ContainerBlueDark,
  ContainerBlueLight,
  ContainerButtons,
  Description,
  Header,
  ImageUser,
  Quantity,
  Stars,
  Name,
  ContentLeft,
  ContentMiddle,
  ContentRight,
  Title,
  Button,
  TitleButton,
  Information,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface IDataInput {
  category: string;
}

interface Categories {
  status: boolean;
  error: string | null;
  data: [
    {
      token: string;
      category: string;
      sub_category: string;
      icon_url: string;
    }
  ]
}

export interface IPartnersByCategory {
  status: boolean;
  error: string | null;
  data: [
    {
      pk: number;
      sub_category: string;
      name: string;
      surname: string;
      description: string;
      latitude: string;
      longitude: string;
      is_home_office: boolean;
      is_local_office: boolean;
      min_price: string;
      rank: number;
      url_picture: string;
    }
  ] | [];
}

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user)
  const [categories, setCategories] = useState<Categories>();

  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    const data = {
      type: 'list_category_values',
    };
    api.post('/mobile/requisitions/ReqEmployees.php ', data)
      .then((response) => setCategories(response.data));
  }, []);

  // Input Search
  async function searchCategory({ category }: IDataInput) {
    const data = {
      type: 'list_category',
      category: '',
      sub_category: '',
      is_home_office: '',
      is_local_office: '',
      max_price: '',
      rank: '',
      max_distance: '150',
      latitude: '-25.43169',
      longitude: '-49.22403',
    };

    data.category = category;

    const response = await api
      .post('/mobile/requisitions/ReqEmployees.php', data);

    reset(); // reset input

    if (response.data.data.length === 0) {
      Alert.alert(
        'Categoria Vazia',
        'Categoria não possui parceiros. Tente novamente',
      );
    } else {
      navigation.navigate('SearchResult', response.data);
    }
  }

  // Button Cards
  async function handlePartnersLoad(category: string) {
    const data = {
      type: 'list_category',
      category: '',
      sub_category: '',
      is_home_office: '',
      is_local_office: '',
      max_price: '',
      rank: '',
      max_distance: '150',
      latitude: '-25.43169',
      longitude: '-49.22403',
    };

    data.category = category;

    const response = await api
      .post('/mobile/requisitions/ReqEmployees.php', data);

    if (response.data.data.length === 0) {
      Alert.alert(
        'Categoria Vazia',
        'Categoria não possui parceiros. Tente novamente',
      );
    } else {
      navigation.navigate('SearchResult', response.data);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container>
        <Header />

        <ImageUser source={{ uri: user?.data.url_picture }} />

        <Name>{user?.data.name}</Name>

        <Stars onPress={() => navigation.navigate('Avaliacoes')}>
          <IconFeather
            name="star"
            color="#FFBC00"
            size={18}
            style={{ marginLeft: 4 }}
          />

          <IconFeather
            name="star"
            color="#FFBC00"
            size={18}
            style={{ marginLeft: 4 }}
          />

          <IconFeather
            name="star"
            color="#FFBC00"
            size={18}
            style={{ marginLeft: 4 }}
          />

          <IconFeather
            name="star"
            color="#FFBC00"
            size={18}
            style={{ marginLeft: 4 }}
          />

          <IconFeather
            name="star"
            color="#FFBC00"
            size={18}
            style={{ marginLeft: 4 }}
          />
        </Stars>

        <ContainerButtons>

          <ButtonCard onPress={() => navigation.navigate('Notifications')}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <AlertIcon />
            </View>
            <Quantity>1</Quantity>
            <Description>Avisos</Description>
          </ButtonCard>

          <ButtonCard onPress={() => navigation.navigate('Chat')}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <ChatIcon />
            </View>
            <Quantity>5</Quantity>
            <Description>Não Lidas</Description>
          </ButtonCard>

          <ButtonCard onPress={() => navigation.navigate('Freelas')}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <FreelasIcon />
            </View>
            <Quantity>2</Quantity>
            <Description>Serviços</Description>
          </ButtonCard>

        </ContainerButtons>

        <ContainerBlueLight>
          {/* <ContentLeft>
            <FreelasIcon />
          </ContentLeft> */}
          <ContentMiddle>
            <Title>Promoção!</Title>
            <Information>
              Só hoje, 30 Freela Coins por R$25
            </Information>
          </ContentMiddle>
          <ContentRight>
            <Button onPress={() => navigation.navigate('FreelaStore')}>
              <TitleButton>Comprar</TitleButton>
            </Button>
          </ContentRight>
        </ContainerBlueLight>

        <ContainerBlueDark>
          {/* <ContentLeft>
            <FreelasIcon />
          </ContentLeft> */}
          <ContentMiddle>
            <Title>Indique e ganhe!</Title>
            <Information>
              Indique para seus amigos e
              ganhe 10 Freela coins por
              amigo que se cadastrar
            </Information>
          </ContentMiddle>
          <ContentRight>
            <Button>
              <TitleButton>Compartilhar</TitleButton>
            </Button>
          </ContentRight>
        </ContainerBlueDark>

      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
