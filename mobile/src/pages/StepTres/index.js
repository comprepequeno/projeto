import React, { useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { 
  Container,
  TextTitle, 
  TextSubTitle, 
  ImageLocalizacao, 
  ViewGroupButtons, 
  ButtonDefault, 
  TextButtonDefault,
  ViewGroupStep,
  ViewStep
} from './styles';

export default function StepUm({ navigation }) {
  const handlePermission = async () => {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
      console.log('entrou')
      navigation.navigate('StepDois');
    }
  }

  return (
    <Container>
      <TextTitle>Bem Vindo!</TextTitle>
      <TextSubTitle>Gostaria de receber notificações?</TextSubTitle>
      <ImageLocalizacao source={require('../../assets/pessoaFisicaJuridica.png')} />
      <ViewGroupButtons>
        <ButtonDefault backgroundColor="#F0F0F0">
          <TextButtonDefault color="#656565">
            jurídica
          </TextButtonDefault>
        </ButtonDefault>
        <ButtonDefault backgroundColor="#643BEE" onPress={() => handlePermission()}>
          <TextButtonDefault
            color="#fff"
          >
            física
          </TextButtonDefault>
        </ButtonDefault>
      </ViewGroupButtons>
      <ViewGroupStep>
        <ViewStep marginRight={true} />
        <ViewStep marginRight={true} />
        <ViewStep active={true} />
      </ViewGroupStep>
    </Container>
  );
}
