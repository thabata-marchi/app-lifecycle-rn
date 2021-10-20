import React, { useState, useEffect, useRef } from 'react';

import { StatusBar, Animated, TouchableOpacity } from 'react-native';
import Colors from '~/theme/colors';

import * as S from './styles'


const Main = () => {
  const [changeState, setChangeState] = useState('');
  
  useEffect(() => {
    setChangeState('State inicial!');
  }, []);


  const [yellowSquareAnim] = useState(new Animated.Value(1))
  const onPressSpring = () => {
    Animated.timing(yellowSquareAnim, {
      toValue: 2, duration: 3000,
      useNativeDriver: false
    }).start()
  }

  

  return (
  <>
    <S.Header>
      <S.TextHeader>Página com React Native</S.TextHeader>
    </S.Header>
      
    <S.Container>
      <StatusBar
        translucent
        backgroundColor={Colors.backgroundHeader}
        barStyle="light-content"
      />
    
        <S.TextState>Exemplo: {changeState}</S.TextState>
        
        <S.TextClick>Clique no quadrado para alterar o texto!</S.TextClick>

        <TouchableOpacity onPress={onPressSpring}>
        
          <Animated.View style={{
              backgroundColor: Colors.greenLight,
              height: 50,
              width: 50,
              marginBottom: 20,
              transform: [{scale: yellowSquareAnim}]
            }}

          />
        </TouchableOpacity>          

      <S.Button>
        <S.TextButton>IR PARA PRÓXIMA TELA</S.TextButton>
      </S.Button>
    </S.Container>
  </>
  )
}

export default Main;