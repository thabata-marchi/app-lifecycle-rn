import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Colors from '~/theme/colors';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {
  const navigation = useNavigation();

  return (
  <>
    <S.Container>
      <StatusBar
        translucent
        backgroundColor={Colors.backgroundHeader}
        barStyle="light-content"
      />
    
      <S.TextState style={{marginBottom: 20}}>Tela sem estado!</S.TextState> 

      <S.Button onPress={() => navigation.goBack()}>
        <S.TextButton>IR PARA PRÓXIMA TELA</S.TextButton>
      </S.Button>
    </S.Container>
  </>
  )
}

export default SecondPage;