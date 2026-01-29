import { View, Text, Pressable } from 'react-native';
import styled from 'styled-components/native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStore } from '@store/store';
import { RootStackParamList } from '@navigation/AppNavigator';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "@navigation/TabNavigator";


type NavButtonProps = {
  bgColor: string;
};


const Container = styled(View)`
    flex: 1;
    padding: 24px;
    background-color: #f0f4f8;
    justify-content: center;
`;

const Title = styled(Text)`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    color: #333;
`;

const CounterText = styled(Text)`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: center;
`;

const TotalText = styled(Text)`
    font-size: 20px;
    margin-bottom: 24px;
    text-align: center;
    color: #555;
`;

const Button = styled(Pressable)<NavButtonProps>`
  background-color: ${(props:NavButtonProps) => props.bgColor || '#007AFF'};
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
`;

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;


export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const total = useStore((state) => state.total);

  return (
    <Container>
      <Title>Welcome to Expense Tracker!</Title>

      <TotalText>Total Expenses: ${total.toFixed(2)}</TotalText>

      <Button bgColor="#007AFF" onPress={() => navigation.navigate('Expenses')}>
        <ButtonText>Go to Expenses</ButtonText>
      </Button>
      <Button bgColor="#5856D6" onPress={() => navigation.navigate('Counter')}>
        <ButtonText>Go to Counter</ButtonText>
      </Button>
      <Button bgColor="#FF9500" onPress={() => navigation.navigate('Stats')}>
        <ButtonText>Go to Stats</ButtonText>
      </Button>
      <Button bgColor="#FF2D55" onPress={() => navigation.navigate('Future')}>
        <ButtonText>Go to Future</ButtonText>
      </Button>
    </Container>
  );
}
