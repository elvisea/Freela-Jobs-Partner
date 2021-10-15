import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import api from '../../services/api';

import {
  Card,
  Container,
  ContainerBlueDark,
  ContainerBlueLight,
  ContainerCards,
  Description,
  Header,
  ImageUser,
  Quantity,
  Title,
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

        <Title>{user?.data.name}</Title>

        <ContainerCards>
          <Card>
            {/* <Quantity>10</Quantity>
            <Description>Descrição</Description> */}
          </Card>
          <Card>
            {/* <Quantity>10</Quantity>
            <Description>Descrição</Description> */}
          </Card>
          <Card>
            {/* <Quantity>10</Quantity>
            <Description>Descrição</Description> */}
          </Card>
        </ContainerCards>

        <ContainerBlueLight />
        <ContainerBlueDark />


      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
