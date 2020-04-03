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
    await Permissions.askAsync(Permissions.LOCATION);
    const { status } = await Location.getPermissionsAsync()

    if (status === 'granted' || status === 'undetermined') {
      navigation.navigate('StepDois');
    }
  }

  return (
    <Container>
      <TextTitle>Bem Vindo!</TextTitle>
      <TextSubTitle>Deseja compartilhar sua localização?</TextSubTitle>
      <ImageLocalizacao source={require('../../assets/localizacao.png')} />
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
        <ViewStep active={true} marginRight={true} />
        <ViewStep marginRight={true} />
        <ViewStep />
      </ViewGroupStep>
    </Container>
  );
}
