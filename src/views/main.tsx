import React, { useState } from 'react';

import { StatusBar, Platform } from 'react-native';
import Colors from '~/theme/colors';

import * as S from './styles'


const Main = () => {


  return (
  <>
    { Platform.OS === 'ios' &&
      <S.Header>
        <S.TextHeader>Página com React Native</S.TextHeader>
      </S.Header>
      }
      
    <S.Container>
      <StatusBar translucent backgroundColor={Colors.backgroundHeader} barStyle="dark-content" />
      
      <S.TextState>Exemplo: State inicial!</S.TextState>
      <S.TextClick>Clique no quadrado para alterar o texto!</S.TextClick>

      <S.Animate />

      <S.Button>
        <S.TextButton>IR PARA PRÓXIMA TELA</S.TextButton>
      </S.Button>
    </S.Container>
  </>
  )
}

export default Main;