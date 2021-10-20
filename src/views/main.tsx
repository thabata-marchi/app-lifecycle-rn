import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { MotiView, useAnimationState } from 'moti'
import Colors from '~/theme/colors';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const [changeState, setChangeState] = useState('');

  useEffect(() => {
    setChangeState('State inicial!');
  }, []);

  const scaleIn = useAnimationState({
    from: {
      scale: 0.5,
    },
    open: {
      scale: 1,
    },
  })

  const onPress = () => {
    if (scaleIn.current === 'from') {
      setChangeState('State alterado!');
      scaleIn.transitionTo('open')
    } else if (scaleIn.current === 'open') {
      setChangeState('State altera novamente!');
      scaleIn.transitionTo('from')
    }
  }

  return (
  <>      
    <S.Container>
      <StatusBar
        translucent
        backgroundColor={Colors.backgroundHeader}
        barStyle="light-content"
      />
    
        <S.TextState>Exemplo: {changeState}</S.TextState>        
        <S.TextClick>Clique no quadrado para alterar o texto!</S.TextClick>

        <MotiView>
          <Pressable onPress={onPress}>
            <MotiView
              transition={{
                type: 'timing',
                duration: 1000,
              }}        
              delay={300}
              state={scaleIn}
              style={styles.shape}
            />
          </Pressable>
        </MotiView>
        
      <S.Button onPress={() => navigation.navigate('SecondPage')}>
        <S.TextButton>IR PARA PRÓXIMA TELA</S.TextButton>
      </S.Button>
    </S.Container>
  </>
  )
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    backgroundColor: Colors.greenLight,
    marginVertical: 10,
  },
})

export default Main;