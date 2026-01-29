import { ScrollView, Pressable, Text, View } from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/AppNavigator';
import styled from 'styled-components/native';
import {RootTabParamList} from "@navigation/TabNavigator";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const Container = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

const Section = styled(View)`
  margin-bottom: 24px;
  align-items: center;
`;

type NavButtonProps = {
  bgColor: string;
};

const NavButton = styled(Pressable)<NavButtonProps>`
    width: 100%;
    padding: 14px;
    background-color: ${(props:NavButtonProps) => props.bgColor};
    border-radius: 8px;
    margin-bottom: 16px;
    align-items: center;
`;

const NavText = styled(Text)`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <Section>
        <NavButton bgColor="#6200ee" onPress={() => navigation.navigate('Counter')}>
          <NavText>Counter Screen</NavText>
        </NavButton>

        <NavButton bgColor="#008000" onPress={() => navigation.navigate('Expenses')}>
          <NavText>Expenses</NavText>
        </NavButton>

        <NavButton bgColor="#ff8c00" onPress={() => navigation.navigate('Stats')}>
          <NavText>Stats</NavText>
        </NavButton>

        <NavButton bgColor="#4b0082" onPress={() => navigation.navigate('Future')}>
          <NavText>Future Screen</NavText>
        </NavButton>
      </Section>
    </Container>
  );
}
