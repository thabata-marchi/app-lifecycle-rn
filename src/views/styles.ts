import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Colors from '~/theme/colors';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.backgroundBody};
  align-items: center;
  justify-content: center;
`;

export const TextState = styled.Text`
  color: ${Colors.greenText};
  font-size: 22px;
  font-weight: 500;
`;

export const TextClick = styled.Text`
  color: ${Colors.greenText};
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 28px;
  margin-top: 5px;
`;

export const Square = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${Colors.greenLight};
  margin: 25px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${Colors.greenButton};
  border-radius: 5px;
  padding: 5px 20px;
`;

export const TextButton = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

export const Header = styled.View`
  background-color: ${Colors.backgroundHeader};
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${Colors.greenText};
  font-size: 20px;
  margin-top: ${Platform.OS === 'ios'? RFPercentage(5) : RFPercentage(2)};
  font-weight: 400;
`;