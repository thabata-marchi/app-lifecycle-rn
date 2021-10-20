import React from 'react';
import Main from './views/main';
import SecondPage from './views/secondPage';
import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '~/theme/colors';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Main}          
          options={{            
            headerStyle: {
              backgroundColor: Colors.backgroundHeader,    
            },
            headerTintColor: Colors.greenText,
            title: "Página com React Native",
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{            
            headerStyle: {
              backgroundColor: Colors.backgroundHeader,    
            },
            headerTintColor: Colors.greenText,
            title: "Página com React Native",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;