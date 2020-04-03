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

    if (status === 'granted' || status === 'undetermined') {
      navigation.navigate('StepTres');
    }
  }

  return (
    <Container>
      <TextTitle>Bem Vindo!</TextTitle>
      <TextSubTitle>Gostaria de receber notificações?</TextSubTitle>
      <ImageLocalizacao source={require('../../assets/notificacao.png')} />
      <ViewGroupButtons>
        <ButtonDefault backgroundColor="#F0F0F0">
          <TextButtonDefault color="#656565">
            depois
          </TextButtonDefault>
        </ButtonDefault>
        <ButtonDefault backgroundColor="#643BEE" onPress={() => handlePermission()}>
          <TextButtonDefault
            color="#fff"
          >
            sim
          </TextButtonDefault>
        </ButtonDefault>
      </ViewGroupButtons>
      <ViewGroupStep>
        <ViewStep marginRight={true} />
        <ViewStep active={true} marginRight={true} />
        <ViewStep />
      </ViewGroupStep>
    </Container>
  );
}
