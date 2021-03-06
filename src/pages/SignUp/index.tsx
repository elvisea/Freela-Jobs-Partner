import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  Platform,
  Image,
  View,
  Alert,
} from 'react-native';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import registerImg from '../../assets/register.png';

import {
  Keyboard,
  Container,
  ContainerTerms,
  TermsButton,
  TermsButtonText,
  TermsText,
  Title,
} from './styles';

interface SignUpFormData {
  name: string;
  surname: string;
  cpf: string;
  mail: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  async function handleSignUp({
    name,
    surname,
    cpf,
    mail,
    password,
  }: SignUpFormData) {

    const data = {
      type: "InsertMailUser",
      mail,
      password,
      name,
      surname,
      birthdate: "20/10/2021",
      rg: "012345678",
      cpf,
      ddd: "00",
      phone: "012345678",
      ddd_contact: "00",
      phone_contact: "12345678",
      address: "Rua Endereço",
      complement: "Apto 00",
      address_number: "00",
      latitude: "-25.3701533",
      longitude: "-49.1865057",
      imei: "acdee34dc152c4c8f1a2f7cb8ed442bef860ea87"
    };

    const response = await api
      .post('/mobile_partner/requisitions/ReqRegister.php', data);

    // Trocar Type: Data.Status da API por Boolean
    if (response.data.status === 'false') {
      Alert.alert(
        'Erro ao relizar o cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente.',
      );
    } else {
      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você ja pode fazer login na aplicação.',
        [
          {
            text: 'Fazer Login',
            onPress: () => navigation.goBack(),
          },
        ],
      );
    }
  }

  return (
    <>
      <Keyboard
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={registerImg} style={{ marginTop: 45.2 }} />

            <View>
              <Title>Cadastro</Title>
            </View>

            <Input
              name="name"
              placeholder="Nome"
              control={control}
              keyboardType="default"
              autoCapitalize="words"
              returnKeyType="next"
            />

            <Input
              name="surname"
              placeholder="Sobrenome"
              control={control}
              keyboardType="default"
              autoCapitalize="words"
              returnKeyType="next"
            />

            <Input
              name="cpf"
              placeholder="CPF"
              control={control}
              keyboardType="numeric"
              autoCorrect={false}
              returnKeyType="next"
            />

            <Input
              name="mail"
              placeholder="Email"
              control={control}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />

            <Input
              name="password"
              placeholder="Senha"
              control={control}
              secureTextEntry
              textContentType="newPassword"
              returnKeyType="send"
            />

            <ContainerTerms>
              <TermsText>Li e aceito os </TermsText>
              <TermsButton onPress={() => navigation.navigate('Terms')}>
                <TermsButtonText>Termos de Uso </TermsButtonText>
              </TermsButton>
              <TermsText>e as </TermsText>
              <TermsButton onPress={() => navigation.navigate('Politics')}>
                <TermsButtonText>Políticas de Privacidade.</TermsButtonText>
              </TermsButton>
            </ContainerTerms>

            <View style={{ alignItems: 'center' }}>
              <Button onPress={handleSubmit(handleSignUp)}>Cadastrar</Button>
            </View>
          </Container>
        </ScrollView>
      </Keyboard>
    </>
  );
};

export default SignUp;
